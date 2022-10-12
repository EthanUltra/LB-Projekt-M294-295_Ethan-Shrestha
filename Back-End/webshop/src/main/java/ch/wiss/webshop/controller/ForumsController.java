package ch.wiss.webshop.controller;

import java.util.List;

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

import ch.wiss.webshop.exception.ForumsNotFoundException;
import ch.wiss.webshop.model.Book;
import ch.wiss.webshop.model.Forums;
import ch.wiss.webshop.model.ForumsRepository;
import ch.wiss.webshop.service.ForumsService;

@CrossOrigin(origins = "*")
@RestController // This means that this class is a Controller
@RequestMapping(path = "/forum") // This means URL's start with /demo (after Application path)
public class ForumsController {
	
	@Autowired
	private ForumsRepository forumsRepository;
	
	@GetMapping("/forums")
	public List<Forums> getAllForums() {
		return (List<Forums>) forumsRepository.findAll();	
	}
	@PostMapping("/add")
	Forums newForums(@RequestBody Forums newForums) {
		return forumsRepository.save(newForums);
	}
	@PutMapping("/forum/{id}")
	Forums updateForums(@RequestBody Forums newForums, @PathVariable Integer id) {
		return forumsRepository.findById(id)
				.map(forums -> {
					forums.setUsername(newForums.getUsername());
					forums.setDiscussion(newForums.getDiscussion());
					return forumsRepository.save(forums);
				}).orElseThrow(() -> new ForumsNotFoundException(id));
	}
	
	@GetMapping("/forum/{id}")
	Forums getForumsById(@PathVariable Integer id) {
		return forumsRepository.findById(id)
				.orElseThrow(() -> new ForumsNotFoundException(id));
	}
	
	@DeleteMapping("/forum/{id}")
	String deleteForums(@PathVariable Integer id) {
		if(!forumsRepository.existsById(id)) {
			throw new ForumsNotFoundException(id); 
			}
		forumsRepository.deleteById(id);
		return "Forum with id "+id+" has been deleted successful";
		}
}
