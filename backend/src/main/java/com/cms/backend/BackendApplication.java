package com.cms.backend;

import com.cms.backend.models.User;
import com.cms.backend.repositories.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class BackendApplication {

    public static void main(String[] args) {
        SpringApplication.run(BackendApplication.class, args);
    }

    @Bean
    public CommandLineRunner initData(UserRepository userRepository) {
        return args -> {
            if (userRepository.findByEmail("admin@admin.com").isEmpty()) {
                userRepository.save(new User("Admin", "admin@admin.com", "admin123", "ADMIN"));
                System.out.println("Seeded admin user: admin@admin.com / admin123");
            }
        };
    }
}
