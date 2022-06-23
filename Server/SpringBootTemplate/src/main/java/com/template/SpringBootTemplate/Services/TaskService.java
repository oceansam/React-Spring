package com.template.SpringBootTemplate.Services;

import java.util.List;
import java.util.NoSuchElementException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.template.SpringBootTemplate.model.Task;
import com.template.SpringBootTemplate.repository.TaskRepository;

@Service
public class TaskService {

  @Autowired
  private TaskRepository taskRepo;

  /**
   * Create a new task and save into the db
   * 
   * string @param name
   * boolean @param isCompleted
   * 
   * @return newly created task
   */
  @Transactional
  public Task createTask(Task newTask) {
    return taskRepo.save(newTask);
  }

  public void updateTaskStatus(long id, boolean completeStatus) {
    Task currentTask = taskRepo.findById(id);
    currentTask.setIsComplete(completeStatus);
    taskRepo.save(currentTask);
  }

  @Transactional
  public List<Task> getTasks() {
    List<Task> allTasks = taskRepo.findByIsComplete(true);
    System.out.println("sho");
    System.out.println(allTasks);
    if (allTasks.size() < 1) {
      throw new NoSuchElementException("Empty query");
    }
    return allTasks;
  }

  public void deleteTask(long id) {
    taskRepo.deleteById(id);
  }

}
