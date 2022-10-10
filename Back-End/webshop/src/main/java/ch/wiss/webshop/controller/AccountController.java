package ch.wiss.webshop.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import ch.wiss.webshop.exception.AccountCouldNotBeSavedException;
import ch.wiss.webshop.exception.AccountLoadException;
import ch.wiss.webshop.model.Account;
import ch.wiss.webshop.model.AccountRepository;


@CrossOrigin(origins = "*")
@RestController //
@RequestMapping(path = "/api/")
public class AccountController {
	
	@Autowired
	private AccountRepository accountRepository;
	
	@GetMapping("/accounts")
	public List<Account> getAllAccount() {
		return (List<Account>) accountRepository.findAll();	
	}
	
	@PostMapping("/account") // Map ONLY POST Requests
	public ResponseEntity<String> addNewAccount(@RequestParam String username, String email, String password) {

		Account c = new Account();
		c.setUsername(username);
		c.setEmail(email);
		c.setPassword(password);

		try {
			accountRepository.save(c);
		} catch (Exception ex) {
			throw new AccountCouldNotBeSavedException(username);
		}
		return ResponseEntity.ok("saved");
	}
	
	@DeleteMapping("/account") // Map ONLY POST Requests
	public ResponseEntity<String> DeleteAccount(@RequestParam String username, String email, String password) {

		Account c = new Account();
		c.removeUsername(username);
		c.removeEmail(email);
		c.removePassword(password);

		try {
			accountRepository.save(c);
		} catch (Exception ex) {
			throw new AccountCouldNotBeSavedException(username);
		}
		return ResponseEntity.ok("removed");
	}
}
