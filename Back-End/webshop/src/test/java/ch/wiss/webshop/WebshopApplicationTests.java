package ch.wiss.webshop;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.boot.test.web.server.LocalServerPort;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import ch.wiss.webshop.controller.AccountController;
import ch.wiss.webshop.model.AccountRepository;
import ch.wiss.webshop.model.BookRepository;
import ch.wiss.webshop.model.ForumsRepository;

@SpringBootTest
public class WebshopApplicationTests {
    
    @LocalServerPort
	/* 
	 * Das sind sogenannte "Dependent On Components" kurz DOC's. 
	 * Die Funktionalität dieser Objekte wird vom Framework simuliert 
	 */
	
	@MockBean private AccountRepository accountRepository; 
	@MockBean private BookRepository bookRepository;
	@MockBean private ForumsRepository forumsRepository;

	@Autowired AccountController accountController; 
	
	@Autowired private MockMvc mockMvc;
	
}
