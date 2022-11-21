package ch.wiss.webshop.exception;

/*
 * 
 * This Exception is thrown when the specific book is not found. 
 * 
 */


public class BookNotFoundException extends RuntimeException {
	public BookNotFoundException(int id) {
		super("The books with id '" + id + "' could not be found.");
	}
}
