package ch.wiss.webshop.service;

import ch.wiss.webshop.model.Account;
import ch.wiss.webshop.model.AccountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AccountServiceImpl implements AccountService {
	
	@Autowired
	private AccountRepository accountRepository;
	
	@Override
	public Account saveAccount(Account account) {
		return accountRepository.save(account);
	}
}
