package ch.wiss.webshop;

import java.util.ArrayList;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@RestController
@SpringBootApplication
public class WebshopApplication {
	
	ArrayList<String> items = new ArrayList<>();
	
	@Bean
	public WebMvcConfigurer configure() {
		return new WebMvcConfigurer() {
			@Override
			public void addCorsMappings(CorsRegistry reg) {
				reg.addMapping("/**").allowedOrigins("*");
			}
		};
	}
	
	public static void main(String[] args) {
		SpringApplication.run(WebshopApplication.class, args);
	}
	
	@GetMapping("/")
	public String index() {
		return "Welcome to the Webshop for books! ";
	}
	
	@GetMapping("/items")
	public @ResponseBody Iterable<String> items() {
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
