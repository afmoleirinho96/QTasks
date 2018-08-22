package com.QTasks.QTasks.services;

import java.util.*;


import com.QTasks.QTasks.entities.TaskItem;

/*
 * Nesta classe segue a implementação de "business logic" da aplicação QTask
 */

public interface TaskItemService {
		
	//Comunica com o Repositório para guardar Tasks
	public TaskItem save(TaskItem taskItem);
	
	//Comunica com o Repositório para retornar lista de Tasks
	public List<TaskItem> findAll();
	
	//Comunica com o Repositório para apagar lista de Tasks
	public void delete(long taskItemId);
	
	
	//Comunica com o Repositório para update lista de Tasks
	public TaskItem update(long taskItemId, TaskItem taskItem);
}
