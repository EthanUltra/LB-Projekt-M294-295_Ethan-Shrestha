package ch.wiss.webshop.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Forum")
public class Forums {

	@Id
	private int id;
	private String Username;
	private String Discussion;
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getUsername() {
		return Username;
	}
	public void setUsername(String username) {
		Username = username;
	}
	public String getDiscussion() {
		return Discussion;
	}
	public void setDiscussion(String discussion) {
		Discussion = discussion;
	}
	
	
	
}
	
