package ch.wiss.webshop;

import java.util.ArrayList;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@SpringBootApplication
public class WebshopApplication {

	ArrayList<String> books = new ArrayList<>();
	
	public static void main(String[] args) {
		SpringApplication.run(WebshopApplication.class, args);
	}

	@GetMapping("/")
	public String index() {
		return "Welcome to the Webshop for books! ";
	}

	@GetMapping("/books")
	public @ResponseBody Iterable<String> books() {
		return books;
	}

	@PostMapping("/book")
	public String addBook(@RequestParam String book) {
		books.add(book);
		return "saved";
	}

	@DeleteMapping("/book")
	public String deleteBook(@RequestParam String book) {
		return String.valueOf(books.remove(book));
	}

}
