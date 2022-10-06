package ch.wiss.webshop.exception;

public class BookCouldNotBeSavedException extends RuntimeException {
	public BookCouldNotBeSavedException(String bookText) {
		super("The book '" + bookText + "' could not be saved. ");
	}
}

