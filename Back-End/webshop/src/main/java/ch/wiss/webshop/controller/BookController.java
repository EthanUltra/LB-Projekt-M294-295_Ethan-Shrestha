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


@CrossOrigin(origins = "*") // This is to allow access from Back-End to Front-End by allowing Origin (CORS).
@RestController // This means that this class is a Controller.
@RequestMapping(path = "/book/") // This means URL's start with /book/ (after Application path).
public class BookController {
		
	@Autowired // Injects Book Repository.
	private BookRepository bookRepository;
	
	@GetMapping("/books") // Map only GET Requests with all books. (Shows all books)
	public List<Book> getAllBooks() {
		return (List<Book>) bookRepository.findAll();	
	}
	@PostMapping("/add") // Map only POST Requests. (Creates a book)
	Book newBook(@RequestBody Book newBook) {
		return bookRepository.save(newBook);
	}
	@PutMapping("/book/{id}") // To only PUT Requests with a specific book with an id. (Change the book's information)
	Book updateBook(@RequestBody Book newBook, @PathVariable Integer id) {
		return bookRepository.findById(id)
				.map(book -> {
					book.setTitle(newBook.getTitle());
					book.setAuthors(newBook.getAuthors());
					book.setDescription(newBook.getDescription());
					return bookRepository.save(book);
				}).orElseThrow(() -> new BookNotFoundException(id));
	}
	
	@GetMapping("/book/{id}") // Map only GET Requests with a specific book with an id. (Shows specific book with an id)
	Book getBookById(@PathVariable Integer id) {
		return bookRepository.findById(id)
				.orElseThrow(() -> new BookNotFoundException(id));
	}
	
	@DeleteMapping("/book/{id}") // Map only DELETE Requests with a specific book with an id. (Deletes specific book with an id)
	String deleteBook(@PathVariable Integer id) {
		if(!bookRepository.existsById(id)) {
			throw new AccountNotFoundException(id); 
			}
		bookRepository.deleteById(id);
		return "Book with id "+id+" has been deleted successful";
		}
	}