package ch.wiss.webshop.exception;

public class AccountNotFoundException extends RuntimeException {
	public AccountNotFoundException(int account_id) {
		super("The account with id '" + account_id + "' could not be found.");
	}
}
