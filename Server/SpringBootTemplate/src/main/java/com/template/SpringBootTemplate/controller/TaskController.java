package com.template.SpringBootTemplate.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.template.SpringBootTemplate.Services.TaskService;
import com.template.SpringBootTemplate.model.Task;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping(path = "/api")
public class TaskController {

    @Autowired
    private TaskService taskService;

    @GetMapping("/task")
    public Iterable<Task> getTasks() {
        return taskService.getTasks();
    }

    @PostMapping(value = { "/task", })
    public Task createTask(@RequestParam(name = "name") String taskName,
            @RequestParam(name = "isComplete") boolean isTaskComplete) {
        try {
            Task newTask = taskService.createTask(taskName, isTaskComplete || false);
            return newTask;
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }

    }

}
