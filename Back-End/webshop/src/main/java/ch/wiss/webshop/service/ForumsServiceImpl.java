package ch.wiss.webshop.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ch.wiss.webshop.model.Forums;
import ch.wiss.webshop.model.ForumsRepository;

// This is to implement the Forums to ForumsController.

@Service
public class ForumsServiceImpl implements ForumsService {
	
	@Autowired
	private ForumsRepository forumsRepository;
	
	@Override
	public Forums saveForums(Forums forums) {
		return forumsRepository.save(forums);
	}
}