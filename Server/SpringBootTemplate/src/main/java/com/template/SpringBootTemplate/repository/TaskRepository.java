package com.template.SpringBootTemplate.repository;

import org.springframework.data.repository.CrudRepository;

import com.template.SpringBootTemplate.model.Task;

public interface TaskRepository extends CrudRepository<Task, Long> {
}
