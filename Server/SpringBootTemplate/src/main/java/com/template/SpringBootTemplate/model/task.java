package com.template.SpringBootTemplate.model;

import javax.persistence.Entity;

@Entity
public class Task {

    private String name;
    private boolean isComplete;

    public Task(String name, boolean isComplete){
        super();
        this.name = name;
        this.isComplete = isComplete;
    }

    public String getName() {
        return name;
    }
    public boolean getIsComplete(){
        return isComplete;
    }

    public void setName(String name){
        this.name = name;
    }

    public void setIsComplete(boolean complete){
        this.isComplete = complete;
    }

}