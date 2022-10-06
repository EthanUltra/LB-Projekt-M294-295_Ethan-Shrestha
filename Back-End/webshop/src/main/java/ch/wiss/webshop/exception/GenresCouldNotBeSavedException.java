package ch.wiss.webshop.exception;

public class GenresCouldNotBeSavedException extends RuntimeException {
	public GenresCouldNotBeSavedException(String GenreText) {
		super("The genres '" + GenreText + "' could not be saved. ");
	}
}
