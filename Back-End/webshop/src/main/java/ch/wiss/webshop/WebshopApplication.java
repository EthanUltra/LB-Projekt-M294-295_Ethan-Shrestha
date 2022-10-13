package ch.wiss.webshop;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@RestController 
@SpringBootApplication
public class WebshopApplication {
	
	@Bean // This is to allow access from Back-End to Front-End by allowing Origin (CORS).
	public WebMvcConfigurer configure() {
		return new WebMvcConfigurer() {
			@Override
			public void addCorsMappings(CorsRegistry reg) {
				reg.addMapping("/**").allowedOrigins("*");
			}
		};
	}
	
	// To start SpringBoot.
	public static void main(String[] args) {
		SpringApplication.run(WebshopApplication.class, args);
	}
}
