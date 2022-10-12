package ch.wiss.webshop.controller;

import java.util.List;


import ch.wiss.webshop.exception.AccountNotFoundException;
import ch.wiss.webshop.exception.BookNotFoundException;
import ch.wiss.webshop.model.Book;
import ch.wiss.webshop.model.BookRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@CrossOrigin(origins = "*")
@RestController //
@RequestMapping(path = "/book/")
public class BookController {
		
	@Autowired
	private BookRepository bookRepository;
	
	@GetMapping("/books")
	public List<Book> getAllBooks() {
		return (List<Book>) bookRepository.findAll();	
	}
	@PostMapping("/add")
	Book newBook(@RequestBody Book newBook) {
		return bookRepository.save(newBook);
	}
	@PutMapping("/book/{id}")
	Book updateBook(@RequestBody Book newBook, @PathVariable Integer id) {
		return bookRepository.findById(id)
				.map(book -> {
					book.setTitle(newBook.getTitle());
					book.setAuthors(newBook.getAuthors());
					book.setDescription(newBook.getDescription());
					return bookRepository.save(book);
				}).orElseThrow(() -> new BookNotFoundException(id));
	}
	
	@GetMapping("/book/{id}")
	Book getBookById(@PathVariable Integer id) {
		return bookRepository.findById(id)
				.orElseThrow(() -> new BookNotFoundException(id));
	}
	
	@DeleteMapping("/book/{id}")
	String deleteBook(@PathVariable Integer id) {
		if(!bookRepository.existsById(id)) {
			throw new AccountNotFoundException(id); 
			}
		bookRepository.deleteById(id);
		return "Book with id "+id+" has been deleted successful";
		}
	}