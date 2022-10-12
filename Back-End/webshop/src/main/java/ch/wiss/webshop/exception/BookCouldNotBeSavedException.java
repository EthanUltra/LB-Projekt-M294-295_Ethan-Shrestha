package ch.wiss.webshop.exception;

public class BookCouldNotBeSavedException extends RuntimeException {
	public BookCouldNotBeSavedException(String id) {
		super("The book with id '" + id + "' could not be saved. ");
	}
}

