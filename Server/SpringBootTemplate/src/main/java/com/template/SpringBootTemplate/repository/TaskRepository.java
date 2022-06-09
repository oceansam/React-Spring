package com.template.SpringBootTemplate.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.template.SpringBootTemplate.model;

@Repository
public interface TaskRepository extends JpaRepository<Task>