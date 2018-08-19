package com.QTasks.QTasks.services;

import java.util.*;

import org.springframework.stereotype.Service;

import com.QTasks.QTasks.entities.TaskItem;

/*
 * Nesta classe segue a implementação de "business logic" da aplicação QTask
 */

public interface TaskItemService {
		
	//Comunica com o Repositório para guardar Tasks
	public TaskItem save(TaskItem taskItem);
	
	//Comunica com o Repositório para retornar lista de Tasks
	public List<TaskItem> findAll();
	
	public void delete(long taskItemId);
	
	public TaskItem update(long taskItemId, TaskItem taskItem);
}
