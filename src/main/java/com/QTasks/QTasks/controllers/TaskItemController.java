package com.QTasks.QTasks.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.QTasks.QTasks.entities.TaskItem;
import com.QTasks.QTasks.services.TaskItemService;

@RestController
@RequestMapping (value = "/api/v1/task-item")

public class TaskItemController {
	
	//Persistência
	@Autowired
	TaskItemService taskItemService;
	
	
	
	@RequestMapping(value="", method=RequestMethod.POST)
	public @ResponseBody TaskItem createTaskItem( @RequestBody TaskItem taskItem) {		
		return taskItemService.save(taskItem);
	}

}
