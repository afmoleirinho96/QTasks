package com.QTasks.QTasks.repositories;

import org.springframework.stereotype.Repository;

import com.QTasks.QTasks.entities.TaskItem;


import org.springframework.data.jpa.repository.JpaRepository;
/*
 * Repositório das Tarefas
 */
@Repository
public interface TaskItemRepository extends JpaRepository<TaskItem, Long>{

}
