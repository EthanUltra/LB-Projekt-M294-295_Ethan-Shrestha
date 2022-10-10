package ch.wiss.webshop.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Book")
public class Book {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer book_id;

	@Column(name ="title")
	private String Title;
	@Column(name="author")
	private String Author;
	@Column(name="description")
	private String Description;
	@Column(name="edition")
	private String Edition;
	@Column(name="format")
	private String Format;
	@Column(name="num_pages")
	private String NumPages;
	@Column(name="rating")
	private String Rating;
	@Column(name="rating_count")
	private String Rating_Count;
	@Column(name="review_count")
	private String Review_Count;
	@Column(name="genres")
	private String Genres;
	@Column(name="genre_list")
	private String Genre_List;
	@Column(name="image_url")
	private String Image_Url;
	@Column(name="quote1")
	private String Quote_1;
	@Column(name="quote2")
	private String Quote_2;
	@Column(name="quote3")
	private String Quote_3;
	
	public Integer getBook_id() {
		return book_id;
	}
	public void setBook_id(Integer book_id) {
		this.book_id = book_id;
	}
	public String getTitle() {
		return Title;
	}
	public void setTitle(String title) {
		Title = title;
	}
	public String getAuthor() {
		return Author;
	}
	public void setAuthor(String author) {
		Author = author;
	}
	public String getDescription() {
		return Description;
	}
	public void setDescription(String description) {
		Description = description;
	}
	public String getEdition() {
		return Edition;
	}
	public void setEdition(String edition) {
		Edition = edition;
	}
	public String getFormat() {
		return Format;
	}
	public void setFormat(String format) {
		Format = format;
	}
	public String getNumPages() {
		return NumPages;
	}
	public void setNumPages(String numPages) {
		NumPages = numPages;
	}
	public String getRating() {
		return Rating;
	}
	public void setRating(String rating) {
		Rating = rating;
	}
	public String getRating_Count() {
		return Rating_Count;
	}
	public void setRating_Count(String rating_Count) {
		Rating_Count = rating_Count;
	}
	public String getReview_Count() {
		return Review_Count;
	}
	public void setReview_Count(String review_Count) {
		Review_Count = review_Count;
	}
	public String getGenres() {
		return Genres;
	}
	public void setGenres(String genres) {
		Genres = genres;
	}
	public String getGenre_List() {
		return Genre_List;
	}
	public void setGenre_List(String genre_List) {
		Genre_List = genre_List;
	}
	public String getImage_Url() {
		return Image_Url;
	}
	public void setImage_Url(String image_Url) {
		Image_Url = image_Url;
	}
	public String getQuote_1() {
		return Quote_1;
	}
	public void setQuote_1(String quote_1) {
		Quote_1 = quote_1;
	}
	public String getQuote_2() {
		return Quote_2;
	}
	public void setQuote_2(String quote_2) {
		Quote_2 = quote_2;
	}
	public String getQuote_3() {
		return Quote_3;
	}
	public void setQuote_3(String quote_3) {
		Quote_3 = quote_3;
	}
}

