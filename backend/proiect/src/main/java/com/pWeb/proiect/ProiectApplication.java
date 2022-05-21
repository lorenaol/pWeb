package com.pWeb.proiect;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
//@EnableJpaRepositories("com/pWeb/proiect/Infrastructure/Data/Repositories")
public class ProiectApplication {

	public static void main(String[] args) {
		SpringApplication.run(ProiectApplication.class, args);
	}

}
