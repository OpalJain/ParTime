package com.example.Spring_boot_backend.repository;

import com.example.Spring_boot_backend.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
