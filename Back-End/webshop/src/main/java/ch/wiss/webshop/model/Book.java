package ch.wiss.webshop.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Book")
public class Book {

	@Id
	@GeneratedValue
	private Integer id;
	private String title;
	private String authors;
	private String description;
	private String edition;
	private String format;
	private String numPages;
	private String rating;
	private String rating_Count;
	private String review_Count;
	private String genres;
	private String genre_List;
	private String image_Url;
	private String quote1;
	private String quote2;
	private String quote3;
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getAuthors() {
		return authors;
	}
	public void setAuthors(String authors) {
		this.authors = authors;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getEdition() {
		return edition;
	}
	public void setEdition(String edition) {
		this.edition = edition;
	}
	public String getFormat() {
		return format;
	}
	public void setFormat(String format) {
		this.format = format;
	}
	public String getNumPages() {
		return numPages;
	}
	public void setNumPages(String numPages) {
		this.numPages = numPages;
	}
	public String getRating() {
		return rating;
	}
	public void setRating(String rating) {
		this.rating = rating;
	}
	public String getRating_Count() {
		return rating_Count;
	}
	public void setRating_Count(String rating_Count) {
		this.rating_Count = rating_Count;
	}
	public String getReview_Count() {
		return review_Count;
	}
	public void setReview_Count(String review_Count) {
		this.review_Count = review_Count;
	}
	public String getGenres() {
		return genres;
	}
	public void setGenres(String genres) {
		this.genres = genres;
	}
	public String getGenre_List() {
		return genre_List;
	}
	public void setGenre_List(String genre_List) {
		this.genre_List = genre_List;
	}
	public String getImage_Url() {
		return image_Url;
	}
	public void setImage_Url(String image_Url) {
		this.image_Url = image_Url;
	}
	public String getQuote1() {
		return quote1;
	}
	public void setQuote1(String Quote1) {
		this.quote1 = Quote1;
	}
	public String getQuote2() {
		return quote2;
	}
	public void setQuote2(String Quote2) {
		this.quote2 = Quote2;
	}
	public String getQuote3() {
		return quote3;
	}
	public void setQuote3(String Quote3) {
		this.quote3 = Quote3;
	}	
}

