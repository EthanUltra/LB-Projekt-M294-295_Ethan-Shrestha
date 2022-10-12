package ch.wiss.webshop.exception;

public class ForumsLoadException extends RuntimeException {
	public ForumsLoadException() {
		super("Forums could not be loaded.");
	}
}
