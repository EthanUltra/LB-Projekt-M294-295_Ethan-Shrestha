package ch.wiss.webshop.exception;

public class AccountLoadException extends RuntimeException {
	public AccountLoadException() {
		super("Accounts could not be loaded.");
	}
}
