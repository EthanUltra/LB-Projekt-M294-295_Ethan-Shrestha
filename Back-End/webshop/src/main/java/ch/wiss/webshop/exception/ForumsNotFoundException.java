package ch.wiss.webshop.exception;

/*
 * 
 * This Exception is thrown when the specific forum is not found. 
 * 
 */


public class ForumsNotFoundException extends RuntimeException {
	public ForumsNotFoundException(int id) {
		super("The forums with id '" + id + "' could not be found.");
	}
}
