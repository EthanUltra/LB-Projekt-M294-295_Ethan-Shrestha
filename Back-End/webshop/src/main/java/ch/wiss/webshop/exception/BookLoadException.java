package ch.wiss.webshop.exception;

public class BookLoadException extends RuntimeException {
	public BookLoadException() {
		super("Books could not be loaded.");
	}
}
