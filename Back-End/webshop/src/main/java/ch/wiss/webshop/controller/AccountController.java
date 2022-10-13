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

import ch.wiss.webshop.model.Account;
import ch.wiss.webshop.model.AccountRepository;
import ch.wiss.webshop.exception.AccountNotFoundException;

@CrossOrigin(origins = "*") // This is to allow access from Back-End to Front-End by allowing Origin (CORS).
@RestController // // This means that this class is a Controller.
@RequestMapping(path = "/account/") // This means URL's start with /account/ (after Application path).
public class AccountController {
	
	@Autowired // Injects Account Repository.
	private AccountRepository accountRepository;
		
	@GetMapping("/accounts") // Map only GET Requests with all accounts. (Shows all accounts)
	public List<Account> getAllAccounts() {
		return (List<Account>) accountRepository.findAll();	
	}
	@PostMapping("/add") // Map only POST Requests. (Creates an account)
	Account newAccount(@RequestBody Account newAccount) {
		return accountRepository.save(newAccount);
	}
	@PutMapping("/account/{id}") // To only PUT Requests with a specific account with an id. (Change information)
	Account updateAccount(@RequestBody Account newAccount, @PathVariable Integer id) {
		return accountRepository.findById(id)
				.map(account -> {
					account.setUsername(newAccount.getUsername());
					account.setEmail(newAccount.getEmail());
					account.setPassword(newAccount.getPassword());
					return accountRepository.save(account);
				}).orElseThrow(() -> new AccountNotFoundException(id));
	}
	
	@GetMapping("/account/{id}") // Map only GET Requests with a specific account with an id. (Shows specific account with an id)
	Account getAccountById(@PathVariable Integer id) {
		return accountRepository.findById(id)
				.orElseThrow(() -> new AccountNotFoundException(id));
	}
	
	@DeleteMapping("/account/{id}") // Map only DELETE Requests with a specific account with an id. (Deletes specific account with an id)
	String deleteAccount(@PathVariable Integer id) {
		if(!accountRepository.existsById(id)) {
			throw new AccountNotFoundException(id); 
			}
		accountRepository.deleteById(id);
		return "User with id "+id+" has been deleted successful";
		}
}
