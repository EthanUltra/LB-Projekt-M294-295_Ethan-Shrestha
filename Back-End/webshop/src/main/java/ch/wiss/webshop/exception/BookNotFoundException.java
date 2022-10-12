package ch.wiss.webshop.exception;

public class BookNotFoundException extends RuntimeException {
	public BookNotFoundException(int id) {
		super("The books with id '" + id + "' could not be found.");
	}
}
