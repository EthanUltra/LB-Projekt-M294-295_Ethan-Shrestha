package ch.wiss.webshop.exception;

public class BookLoadException extends RuntimeException {
	public BookLoadException() {
		super("Book could not be loaded.");
	}
}
