package com.template.SpringBootTemplate.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.template.SpringBootTemplate.model.Task;

@Repository
public interface TaskRepository extends CrudRepository<Task, Long> {

    List<Task> findAll();
    Task findById(long id);
}
