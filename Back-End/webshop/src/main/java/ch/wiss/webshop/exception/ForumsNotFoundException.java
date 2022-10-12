package ch.wiss.webshop.exception;

public class ForumsNotFoundException extends RuntimeException {
	public ForumsNotFoundException(int id) {
		super("The forums with id '" + id + "' could not be found.");
	}
}
