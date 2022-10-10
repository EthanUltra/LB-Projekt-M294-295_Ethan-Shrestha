package ch.wiss.webshop.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import ch.wiss.webshop.model.Account;
import ch.wiss.webshop.model.AccountRepository;
import ch.wiss.webshop.service.AccountService;

@CrossOrigin(origins = "*")
@RestController //
@RequestMapping(path = "/api/")
public class AccountController {
	
	@Autowired
	private AccountRepository accountRepository;
	
	@Autowired
	private AccountService accountService;
	
	@GetMapping("/accounts")
	public List<Account> getAllAccount() {
		return (List<Account>) accountRepository.findAll();	
	}
	
	@PostMapping("/add")
	public String add(@RequestBody Account account) {
		accountService.saveAccount(account);
		return "New Account is added";
	}
}
