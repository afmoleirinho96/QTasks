package com.QTasks.QTasks.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.QTasks.QTasks.entities.TaskItem;
import com.QTasks.QTasks.repositories.TaskItemRepository;

@Service
public class TaskItemServiceImpl implements TaskItemService {

	
	@Autowired //JPA
	TaskItemRepository taskItemRepository;
	
	//Retirado da iplementação do CrudRepository
	/**
	 * Saves a given entity. Use the returned instance for further operations as the save operation might have changed the
	 * entity instance completely.
	 */
	
	//CrudRepository apresenta um método save que tratará da persistência
	@Override
	public TaskItem save(TaskItem taskItem) {
		return this.taskItemRepository.save(taskItem);
	}

}
