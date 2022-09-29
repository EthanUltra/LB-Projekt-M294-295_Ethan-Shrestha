package ch.wiss.webshop.controller;

import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import ch.wiss.webshop.model.AccountRepository;
import ch.wiss.webshop.model.BookRepository;
import ch.wiss.wiss_quiz.exception.AnswerCouldNotBeSavedException;
import ch.wiss.wiss_quiz.exception.CategoryNotFoundException;
import ch.wiss.wiss_quiz.exception.QuestionCouldNotBeSavedException;
import ch.wiss.wiss_quiz.exception.QuestionLoadException;
import ch.wiss.wiss_quiz.model.Answer;
import ch.wiss.wiss_quiz.model.AnswerRepository;
import ch.wiss.wiss_quiz.model.Category;
import ch.wiss.wiss_quiz.model.CategoryRepository;
import ch.wiss.wiss_quiz.model.Question;
import ch.wiss.wiss_quiz.model.QuestionRepository;

@RestController
@RequestMapping(path = "Books")
public class BookController {

	@Autowired
	private AccountRepository accountRepository;
	@Autowired
	private BookRepository bookRepository;

	@PostMapping(path = "/{cat_id}") // Map ONLY POST Requests
	public ResponseEntity<String> addNewQuestion(@PathVariable(value = "cat_id") Integer catId,
			@Valid @RequestBody Question question) {

		Optional<Category> category = categoryRepository.findById(catId);

		if (category.isEmpty()) {
			throw new CategoryNotFoundException(catId);
		}

		question.setCategory(category.get());
		// we need to store nested Answer-Objects separately
		List<Answer> answers = List.copyOf(question.getAnswers());

		question.setAnswers(null);

		try {
			questionRepository.save(question);
		} catch (Exception ex) {
			throw new QuestionCouldNotBeSavedException(question.getQuestion());
		}

		// we need to store nested Answer-Objects separately
		answers.forEach(answer -> {
			answer.setQuestion(question);
			try {
				answerRepository.save(answer);
			} catch (Exception ex) {
				throw new AnswerCouldNotBeSavedException(answer.getAnswer());
			}

		});

		return ResponseEntity.ok("Saved");
	}

	@GetMapping(path = "")
	public ResponseEntity<Iterable<Question>> getAllQuestions() {
		Iterable<Question> questions = null;
		try {
			questions = questionRepository.findAll();
		} catch (Exception ex) {
			throw new QuestionLoadException();
		}

		return ResponseEntity.ok(questions);
	}
	
}
