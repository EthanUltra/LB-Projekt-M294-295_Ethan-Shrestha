package ch.wiss.webshop.exception;

public class AccountCouldNotBeSavedException extends RuntimeException {
	public AccountCouldNotBeSavedException(String accountText) {
		super("The account '" + accountText + "' could not be saved. ");
	}

}
