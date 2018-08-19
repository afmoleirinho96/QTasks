package com.QTasks.QTasks;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.QTasks.QTasks.repositories.TaskItemRepository;

@SpringBootApplication
public class QTasksApplication {
	
	@Autowired
	private TaskItemRepository taskItemRepository;
	public static void main(String[] args) {
		SpringApplication.run(QTasksApplication.class, args);
	}
}
