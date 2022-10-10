package ch.wiss.webshop.exception;

public class AccountNotFoundException extends RuntimeException {
	public AccountNotFoundException(int categoryId) {
		super("The account with id '" + categoryId + "' could not be found.");
	}
}
