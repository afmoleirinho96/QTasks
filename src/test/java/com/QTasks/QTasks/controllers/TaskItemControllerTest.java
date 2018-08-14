package com.QTasks.QTasks.controllers;

import static org.hamcrest.CoreMatchers.equalTo;
import static org.junit.Assert.*;
import static org.mockito.Mockito.when;

import java.util.*;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.MockitoJUnitRunner;

import com.QTasks.QTasks.entities.TaskItem;
import com.QTasks.QTasks.services.TaskItemService;

@RunWith(MockitoJUnitRunner.class)
public class TaskItemControllerTest {
	
	
	@InjectMocks
	TaskItemController subject;
	
	@Mock
	TaskItemService taskItemService;
	
	@Test
	public void testCreatedTaskItemReturnsSaveTaskItem() {
		//Criar TaskListItem, fazer Request e Responde
		
		//Request
		final TaskItem taskItemRequest= new TaskItem();
		
		//Response
		final TaskItem taskItemResponse = new TaskItem();
		taskItemResponse.setId(300L);
		
		//Através do mockito, quando guardar um request, terá que retornar uma resposta
		when(taskItemService.save(taskItemRequest)).thenReturn(taskItemResponse);
		
		assertThat(subject.createTaskItem(taskItemRequest).getId(), equalTo(300L));
	}
	
	@Test
	public void testFindAllShouldReturnList(){
		final List<TaskItem> taskItems= new ArrayList<TaskItem>();
		
		final TaskItem taskItem= new TaskItem();
		taskItem.setDescription("I am a task list Item");
		taskItem.setId(200L);
		
		taskItems.add(taskItem);
		
		when(taskItemService.findAll()).thenReturn(taskItems);
		
		final List<TaskItem> result= subject.findAll();
		
		assertThat(result.size(),equalTo(1));
	}

}
