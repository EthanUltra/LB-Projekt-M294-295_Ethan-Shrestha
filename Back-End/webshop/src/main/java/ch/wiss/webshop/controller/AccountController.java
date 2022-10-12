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

@CrossOrigin(origins = "*")
@RestController //
@RequestMapping(path = "/account/")
public class AccountController {
	
	@Autowired
	private AccountRepository accountRepository;
		
	@GetMapping("/accounts")
	public List<Account> getAllAccounts() {
		return (List<Account>) accountRepository.findAll();	
	}
	@PostMapping("/add")
	Account newAccount(@RequestBody Account newAccount) {
		return accountRepository.save(newAccount);
	}
	@PutMapping("/account/{id}")
	Account updateAccount(@RequestBody Account newAccount, @PathVariable Integer id) {
		return accountRepository.findById(id)
				.map(account -> {
					account.setUsername(newAccount.getUsername());
					account.setEmail(newAccount.getEmail());
					account.setPassword(newAccount.getPassword());
					return accountRepository.save(account);
				}).orElseThrow(() -> new AccountNotFoundException(id));
	}
	
	@GetMapping("/account/{id}")
	Account getAccountById(@PathVariable Integer id) {
		return accountRepository.findById(id)
				.orElseThrow(() -> new AccountNotFoundException(id));
	}
	
	@DeleteMapping("/account/{id}")
	String deleteAccount(@PathVariable Integer id) {
		if(!accountRepository.existsById(id)) {
			throw new AccountNotFoundException(id); 
			}
		accountRepository.deleteById(id);
		return "User with id "+id+" has been deleted successful";
		}
}
