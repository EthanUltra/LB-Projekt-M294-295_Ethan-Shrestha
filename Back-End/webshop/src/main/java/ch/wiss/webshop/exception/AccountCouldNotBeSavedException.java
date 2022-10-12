package ch.wiss.webshop.exception;

public class AccountCouldNotBeSavedException extends RuntimeException {
	public AccountCouldNotBeSavedException(String id) {
		super("The account with id '" + id + "' could not be saved. ");
	}

}
