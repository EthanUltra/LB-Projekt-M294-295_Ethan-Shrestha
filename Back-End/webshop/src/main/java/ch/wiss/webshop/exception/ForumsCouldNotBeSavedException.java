package ch.wiss.webshop.exception;

public class ForumsCouldNotBeSavedException extends RuntimeException {
	public ForumsCouldNotBeSavedException(String id) {
		super("The forums with ID'" + id + "' could not be saved. ");
	}
}
