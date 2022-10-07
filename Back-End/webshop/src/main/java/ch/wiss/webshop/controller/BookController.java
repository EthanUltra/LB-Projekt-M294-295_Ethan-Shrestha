package ch.wiss.webshop.controller;

import java.sql.*;
import java.sql.SQLException;

public class BookController {

	static final String DB_URL = "jdbc:mysql://localhost:3307/LB_WebshopDatenbank";
	static final String USER = "LB_Webshop";
	static final String PASS = "passwd";
	
	public static void main(String[] args) {
	BookController test = new BookItemController();
	try {
		test.addGameBookItem()
	}
	}
}
