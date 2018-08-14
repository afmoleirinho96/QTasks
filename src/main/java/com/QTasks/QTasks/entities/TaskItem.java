package com.QTasks.QTasks.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

/*
 * Definição de uma tarefa(entidade)
 */
@Entity
public class TaskItem {

	@Id
	@GeneratedValue
	private long id;
	//private boolean completed;
	private String description;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}
}
