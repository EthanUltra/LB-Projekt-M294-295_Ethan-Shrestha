package ch.wiss.webshop.exception;

public class SearchbarCouldNotBeSavedException extends RuntimeException {
	public SearchbarCouldNotBeSavedException(String searchText) {
		super("The item you searched for'" + searchText + "' could not be found. ");
	}
}
