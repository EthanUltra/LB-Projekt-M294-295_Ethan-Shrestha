package ch.wiss.webshop.exception;

public class AccountNotFoundException extends RuntimeException {
	public AccountNotFoundException(int id) {
		super("The account with id '" + id + "' could not be found.");
	}
}
