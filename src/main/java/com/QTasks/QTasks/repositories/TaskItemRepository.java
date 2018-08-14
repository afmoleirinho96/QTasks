package com.QTasks.QTasks.repositories;

import org.springframework.stereotype.Repository;

import com.QTasks.QTasks.entities.TaskItem;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
/*
 * Repositório das Tarefas
 */
@Repository
public interface TaskItemRepository extends JpaRepository<TaskItem, Long>{

	
	
}
