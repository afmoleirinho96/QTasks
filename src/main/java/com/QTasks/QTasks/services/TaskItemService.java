package com.QTasks.QTasks.services;

import com.QTasks.QTasks.entities.TaskItem;

public interface TaskItemService {
	
	//Repositório de Tasks
	public TaskItem save(TaskItem taskItem);
}
