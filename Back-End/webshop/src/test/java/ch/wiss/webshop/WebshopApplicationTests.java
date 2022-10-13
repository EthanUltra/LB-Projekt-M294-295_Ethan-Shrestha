package ch.wiss.webshop;

import static org.assertj.core.api.Assertions.assertThat;

import java.util.List;

import org.aspectj.lang.annotation.Before;
import org.hamcrest.Matchers;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

import ch.wiss.webshop.controller.AccountController;
import ch.wiss.webshop.controller.BookController;
import ch.wiss.webshop.controller.ForumsController;
import ch.wiss.webshop.exception.AccountNotFoundException;
import ch.wiss.webshop.model.Account;
import ch.wiss.webshop.model.AccountRepository;
import ch.wiss.webshop.model.BookRepository;
import ch.wiss.webshop.model.ForumsRepository;

@SpringBootTest
public class WebshopApplicationTests {
    
	/* 
	 * Das sind sogenannte "Dependent On Components" kurz DOC's. 
	 * Die Funktionalität dieser Objekte wird vom Framework simuliert 
	 */
	
	@MockBean private AccountRepository accountRepository; 
	@MockBean private BookRepository bookRepository;
	@MockBean private ForumsRepository forumsRepository;

	@Autowired AccountController accountController; 
	@Autowired BookController bookController;
	@Autowired ForumsController forumscontroller;
	
	@Autowired private MockMvc mockMvc;
	
	/*
	 *     @Test
    public void <List<Account> getAllAccounts() {
        (List<Account>) accountRepository.findAll(); 
    Mockito.when(itemRepository.getAllItems()).thenReturn(items);
    mockMvc.perform(MockMvcRequestBuilders.get("/getAllItems"))
         .andExpect(MockMvcResultMatchers.status().isOk());    
        
    }
    @Test
    Account newAccount(@RequestBody Account newAccount) {
        return accountRepository.save(newAccount);
    }
    @Test
    Account updateAccount(@RequestBody Account newAccount, @PathVariable Integer id) {
        return accountRepository.findById(id)
                .map(account -> {
                    account.setUsername(newAccount.getUsername());
                    account.setEmail(newAccount.getEmail());
                    account.setPassword(newAccount.getPassword());
                    return accountRepository.save(account);
                }).orElseThrow(() -> new AccountNotFoundException(id));
    }
    
    @Test
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
	 */
	
}
