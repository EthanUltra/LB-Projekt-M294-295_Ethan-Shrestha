package ch.wiss.webshop;

import java.util.ArrayList;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController

@SpringBootApplication
public class WebshopApplication {

	public static void main(String[] args) {
		SpringApplication.run(WebshopApplication.class, args);
	}
	
	ArrayList<String> items = new ArrayList<>();

	@GetMapping("/")
	public String index() {
		return "Spring Boot Category REST API!";
	}

	@GetMapping("/items")
	public Iterable<String> items() {
		return items;
	}

	@PostMapping("/item")
	public String addItem(@RequestParam String item) {
		items.add(item);
		return "saved";
	}

	@DeleteMapping("/item")
	public String deleteItem(@RequestParam String item) {
		return String.valueOf(items.remove(item));
	}

}
