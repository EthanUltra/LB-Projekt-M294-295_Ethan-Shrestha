package ch.wiss.webshop.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Account")
public class Account {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer account_id;
	@Column(name ="username")
	private String Username;
	@Column(name="email")
	private String Email;
	@Column(name="password")
	private String Password;
	
	public Integer getId() {
		return account_id;
	}
	public void setId(Integer id) {
		this.account_id = id;
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
	public void removeUsername(String account_id2) {
		// TODO Auto-generated method stub
		
	}
	public void removeEmail(String email2) {
		// TODO Auto-generated method stub
		
	}
	public void removePassword(String password2) {
		// TODO Auto-generated method stub
		
	}
}
