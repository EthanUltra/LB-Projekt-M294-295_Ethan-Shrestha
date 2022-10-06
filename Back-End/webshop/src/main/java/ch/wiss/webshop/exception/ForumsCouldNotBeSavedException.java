package ch.wiss.webshop.exception;

public class ForumsCouldNotBeSavedException extends RuntimeException {
	public ForumsCouldNotBeSavedException(String favouriteText) {
		super("The forums '" + favouriteText + "' could not be saved. ");
	}
}
