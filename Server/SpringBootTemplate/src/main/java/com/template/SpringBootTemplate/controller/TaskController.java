package com.template.SpringBootTemplate.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.template.SpringBootTemplate.Services.TaskService;
import com.template.SpringBootTemplate.model.Task;

@RestController
public class TaskController{

    @PostMapping(value = { "/task", })
    public Task createTask(@RequestParam(name="name") String taskName, @RequestParam(name="isComplete") boolean isTaskComplete){
        Task newTask = TaskService.createTask(taskName, isTaskComplete);
        return newTask;
    }



}

