package ch.wiss.webshop.exception;

public class RatingCouldNotBeSavedException extends RuntimeException {
	public RatingCouldNotBeSavedException(String ratingText) {
		super("The ratings '" + ratingText + "' could not be saved. ");
	}
}
