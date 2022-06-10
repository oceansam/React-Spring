package com.template.SpringBootTemplate.Services;

import org.springframework.beans.factory.annotation.Autowired;

import com.template.SpringBootTemplate.model.Task;
import com.template.SpringBootTemplate.repository.TaskRepository;

public class TaskService {
  
  @Autowired
  private TaskRepository taskRepo;

  /** Create a new task and save into the db
   * 
   * string @param name
   * boolean @param isCompleted
   * @return newly created task
   */
  public Task createTask(String name, boolean isCompleted){
    Task newTask = new Task(name, isCompleted);
    taskRepo.save(newTask);
    return newTask;
  }


  public Iterable<Task> getTasks(){
    return taskRepo.findAll();
  }

}
