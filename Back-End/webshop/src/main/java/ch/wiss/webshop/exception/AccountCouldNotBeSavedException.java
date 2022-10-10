package ch.wiss.webshop.exception;

public class AccountCouldNotBeSavedException extends RuntimeException {
	public AccountCouldNotBeSavedException(String name) {
		super("The account '" + name + "' could not be saved. ");
	}

}
