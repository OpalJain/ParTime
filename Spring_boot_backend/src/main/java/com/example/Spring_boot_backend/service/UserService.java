package com.example.Spring_boot_backend.service;

import com.example.Spring_boot_backend.dto.UserDto;
import com.example.Spring_boot_backend.entity.User;

import java.util.List;

public interface UserService {
    UserDto createUser (UserDto userDto);

    UserDto getUserById(Long userId);

    List<UserDto> getAllUsers();

    UserDto updateUser(Long userId, UserDto updateUser);

    void deleteUser(Long userId);
}
