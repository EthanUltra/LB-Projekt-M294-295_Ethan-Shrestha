package ch.wiss.webshop.exception;

public class FavouriteCouldNotBeSavedException extends RuntimeException {
	public FavouriteCouldNotBeSavedException(String favouriteText) {
		super("The favourites '" + favouriteText + "' could not be saved. ");
	}
}
