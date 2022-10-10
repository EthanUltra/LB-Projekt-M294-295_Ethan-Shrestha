package ch.wiss.webshop.exception;

public class BookNotFoundException extends RuntimeException {
	public BookNotFoundException(int book_id) {
		super("The books with id '" + book_id + "' could not be found.");
	}
}
