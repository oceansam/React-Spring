package com.template.SpringBootTemplate.repository;


import java.util.List;

// import org.springframework.data.jpa.repository.JpaRepository;
// import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.template.SpringBootTemplate.model.Task;

@Repository
public interface TaskRepository extends CrudRepository<Task, Long> {

    // @Query("select t from Task t where t.isComplete = true")
    // List<Task> findCompletedTasks();
    List<Task> findAll();
    Task findById(long id);
    List<Task> findByIsComplete(boolean status);
    
    
}
