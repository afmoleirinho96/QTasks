package com.QTasks.QTasks.controllers;

import static org.hamcrest.CoreMatchers.equalTo;
import static org.junit.Assert.*;
import static org.mockito.Mockito.doNothing;
import static org.mockito.Mockito.verify;
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
	
	@Test
	public void testDeleteShouldRemove() {
		
		final long idToDelete = 50L;
		
		doNothing().when(taskItemService).delete(idToDelete);
			
		subject.delete(idToDelete);
		
		verify(taskItemService).delete(idToDelete);
		
	}
	 @Test
	 public void testUpdateShouldReturnUpdatedTaskItem() {
		 final long idToUpdate = 60L;
	
		 final TaskItem TaskItemRequest = new TaskItem();
		 TaskItemRequest.setId(60L);
		 TaskItemRequest.setDescription("old description");

		 final TaskItem TaskItemResponse = new TaskItem();
		 TaskItemResponse.setId(60L);
		 TaskItemResponse.setDescription("updated description");

		 when(taskItemService.update(idToUpdate, TaskItemRequest)).thenReturn(TaskItemResponse);

		 TaskItem response = subject.update(60L, TaskItemRequest);
		 assertThat(response.getId(), equalTo(60L));
		 assertThat(response.getDescription(), equalTo("updated description"));
	}
	
	

}
