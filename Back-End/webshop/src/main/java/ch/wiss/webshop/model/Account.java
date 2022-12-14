package ch.wiss.webshop.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Account") // This is from the MySQL Table: "Account"
public class Account {

	
	// All contents from the table.
	
	@Id
	private int id;
	private String Username;
	private String Email;
	private String Password;
	
	public Account() {
		
	}
	
	// Getter and Setters
	
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getUsername() {
		return Username;
	}
	public void setUsername(String username) {
		Username = username;
	}
	public String getEmail() {
		return Email;
	}
	public void setEmail(String email) {
		Email = email;
	}
	public String getPassword() {
		return Password;
	}
	public void setPassword(String password) {
		Password = password;
	}
}
