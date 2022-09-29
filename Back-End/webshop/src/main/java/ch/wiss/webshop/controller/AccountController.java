package ch.wiss.webshop.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import ch.wiss.webshop.model.AccountRepository;
import ch.wiss.webshop.model.Category;
import ch.wiss.webshop.model.CategoryRepository;

@RestController // This means that this class is a Controller
@RequestMapping(path = "/account") // This means URL's start with /demo (after Application path)
public class AccountController {

	@Autowired
	private AccountRepository categoryRepository;

	@PostMapping(path = "") // Map ONLY POST Requests
	public String addNewCategory(@RequestParam String name) {

		Category c = new Category();
		c.setName(name);
		categoryRepository.save(c);
		return "Saved";
	}

	@GetMapping(path = "")
	public Iterable<Category> getAllCategories() {
		return categoryRepository.findAll();
	}
}