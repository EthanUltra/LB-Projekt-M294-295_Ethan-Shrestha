package ch.wiss.webshop.controller;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import ch.wiss.webshop.model.Book;
import ch.wiss.webshop.model.BookRepository;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;


@CrossOrigin(origins = "*")
@RestController //
@RequestMapping(path = "/api/")
public class BookController {
		
	@Autowired
	private BookRepository bookRepository;
	@GetMapping("/books")
	public List<Book> getAllAccount() {
		return (List<Book>) bookRepository.findAll();	
		}
}