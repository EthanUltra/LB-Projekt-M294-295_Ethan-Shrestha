package ch.wiss.webshop.exception;

/*
 * 
 * This Exception is thrown when the specific account is not found. 
 * 
 */

public class AccountNotFoundException extends RuntimeException {
	public AccountNotFoundException(int id) {
		super("The account with id '" + id + "' could not be found.");
	}
}
