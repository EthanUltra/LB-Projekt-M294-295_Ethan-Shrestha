package ch.wiss.webshop.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

import java.util.HashMap;
import java.util.Map;

@ControllerAdvice
public class AccountNotFoundAdvice {
	
	@ResponseBody
	@ExceptionHandler(AccountNotFoundException.class)
	@ResponseStatus(HttpStatus.NOT_FOUND)
	public Map<String,String> exceptionHandler(AccountNotFoundException exception){
		
		Map<String,String> errorMap=new HashMap<>();
		errorMap.put("errorMessage", exception.getMessage());
		
		return errorMap;
	}
		
	public Map<String,String> exceptionHandler(AccountCouldNotBeSavedException exception){
			
		Map<String,String> errorMap=new HashMap<>();
		errorMap.put("errorMessage", exception.getMessage());
			
		return errorMap;
	}
	
	public Map<String,String> exceptionHandler(AccountLoadException exception){
		
		Map<String,String> errorMap=new HashMap<>();
		errorMap.put("errorMessage", exception.getMessage());
			
		return errorMap;
	}
}
