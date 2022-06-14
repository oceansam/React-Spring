package com.template.SpringBootTemplate.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Task {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(nullable = false, unique = true)
    private long id;

    @Column(nullable = false, unique = false)
    private String name;

    @Column(nullable = false, unique = false)
    private boolean isComplete;

    // Default constructor
    public Task() {
    }

    public Task(long id, String name, boolean isComplete) {
        this.id = id;
        this.name = name;
        this.isComplete = isComplete;
    }

    public String getName() {
        return name;
    }

    public boolean getIsComplete() {
        return isComplete;
    }

    public long getId() {
        return id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setIsComplete(boolean complete) {
        this.isComplete = complete;
    }

    public String toString() {
        return this.name + " " + this.isComplete;
    }

}