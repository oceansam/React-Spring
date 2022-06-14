package com.template.SpringBootTemplate.controller;

import java.net.URISyntaxException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
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
    public Task createTask(@RequestBody Task taskData) throws URISyntaxException {
        Task res = taskService.createTask(taskData);
        return res;

    }

    @DeleteMapping(value = { "/task/{id}" })
    public void deleteTask(@PathVariable long id) {
        System.out.println("SAM-HERE");
        System.out.println(id);
        taskService.deleteTask(id);
    }

}
