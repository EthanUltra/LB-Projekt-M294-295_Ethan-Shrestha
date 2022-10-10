package ch.wiss.webshop.exception;

public class BookNotFoundException extends RuntimeException {
	public BookNotFoundException(int categoryId) {
		super("The books with id '" + categoryId + "' could not be found.");
	}
}
