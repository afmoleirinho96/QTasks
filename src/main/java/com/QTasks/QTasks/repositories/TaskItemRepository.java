package com.QTasks.QTasks.repositories;

import org.springframework.stereotype.Repository;

import com.QTasks.QTasks.entities.TaskItem;

import org.springframework.data.repository.CrudRepository;

@Repository
public interface TaskItemRepository extends CrudRepository<TaskItem, Long>{

	
	
}
