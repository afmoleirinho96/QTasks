package com.QTasks.QTasks.controllers;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.QTasks.QTasks.entities.TaskItem;
import com.QTasks.QTasks.services.TaskItemService;

/*
 * Definição de Rotas
 */

@RestController
@RequestMapping (value = "/api/v1/task-item")

public class TaskItemController {
	
	//Persistência
	@Autowired
	TaskItemService taskItemService;
	
	//Controller recebe um request POST e guarda a task. Através da função save do Service
	@PostMapping
	public @ResponseBody TaskItem createTaskItem( @RequestBody TaskItem taskItem) {		
		return taskItemService.save(taskItem);
	}
	
	
	//Controller recebe um request GET e retorna a lista de itens. Através da função findAll do Service
	@GetMapping
	public @ResponseBody List<TaskItem> findAll() {		
		return taskItemService.findAll();
	}
	
	@RequestMapping(value= "/{id}", method=RequestMethod.DELETE)
	public @ResponseBody void  delete(@PathVariable("id") Long taskItemId) {
		taskItemService.delete(taskItemId);
		
	}
	@PutMapping(value = "/{id}")
    public @ResponseBody TaskItem update(@PathVariable("id") Long taskItemId, @RequestBody TaskItem taskItem) {
    		return taskItemService.update(taskItemId, taskItem);
    }

}
