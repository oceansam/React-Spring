package com.template.SpringBootTemplate.controller;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.template.SpringBootTemplate.Services.TaskService;
import com.template.SpringBootTemplate.model.Task;

@RestController
@RequestMapping(path="/")
public class TaskController{

    @GetMapping("/task")
    public Iterable<Task> getTasks(){
        TaskService taskService = new TaskService();
        return taskService.getTasks();
    }

    @GetMapping("/addTask")
    public Task makeTask(){
        TaskService taskService = new TaskService();
        Task newTask = taskService.createTask("learn springboot",false);
        return newTask;
    }

    @PostMapping(value = { "/task", })
    public Task createTask(@RequestParam(name="name") String taskName, @RequestParam(name="isComplete") boolean isTaskComplete){
        TaskService taskService = new TaskService();
        Task newTask = taskService.createTask(taskName, isTaskComplete);
        return newTask;
    }



}

