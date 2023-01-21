package com.sa.web.controllers;

import com.sa.web.dto.projectDto;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.*;

import java.sql.Array;
import java.util.ArrayList;
import java.util.List;

@RestController
public class MainController {

	@GetMapping("/projects")
	public List <projectDto> getProjectList() {
		List<projectDto>  projects = new ArrayList<projectDto>();
		projects.add(new projectDto("DailyPlanner", "https://github.com/mlizzie/DailyPlanner", "веб приложения планировщик задач c использованием Spring (Boot, Data, WEB), ORM Hibernate.", "https://andreyex.ru/wp-content/uploads/2018/05/Kak-ustanovit-Java-s-apt-na-Ubuntu-18.04.jpg"));
		projects.add(new projectDto("Inception", "https://github.com/mlizzie/Inception", "Docker-compose, NGINX, PHP-FPM && WordPress", "https://s3.mooc.ru/prod/source/origin/photos/categories/501/large.png"));
		projects.add(new projectDto("name", "xexe", "sdsd", "https://img.youtube.com/vi/CdeHV4yD6Ww/0.jpg"));

		return projects;
	}

}