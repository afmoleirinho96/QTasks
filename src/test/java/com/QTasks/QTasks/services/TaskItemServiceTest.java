package com.QTasks.QTasks.services;

import static org.hamcrest.CoreMatchers.equalTo;
import static org.junit.Assert.assertThat;
import static org.mockito.Mockito.doNothing;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.util.*;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.MockitoJUnitRunner;

import com.QTasks.QTasks.repositories.TaskItemRepository;
import com.QTasks.QTasks.entities.TaskItem;

@RunWith(MockitoJUnitRunner.class)
public class TaskItemServiceTest {
	
	@InjectMocks
	TaskItemServiceImpl subject;
	
	@Mock
	TaskItemRepository taskItemRepository;
	
	@Test
	public void testSaveAndReturnTaskItem() {
		final TaskItem taskItem= new TaskItem();
		taskItem.setDescription("This is a task");		
		//Response
		final TaskItem taskItemResponse = new TaskItem();
		taskItemResponse.setId(100L);
		taskItemResponse.setDescription("This is a task");		
		//Teste para quando guardarmos uma task, recebermos uma resposta
		when(taskItemRepository.save(taskItem)).thenReturn(taskItemResponse);
		
		TaskItem response= subject.save(taskItem);
		assertThat(response.getId(), equalTo(100L));
		assertThat(response.getDescription(), equalTo("This is a task"));
		//assertThat(response.getCompleted(), equalTo(true));
	}
	
	@Test
	public void testFindAllShouldReturnList() {
		final List<TaskItem> taskItems= new ArrayList<TaskItem>();
		
		final TaskItem taskItem= new TaskItem();
		taskItem.setDescription("I am a task list Item");
		taskItem.setId(200L);
		
		taskItems.add(taskItem);
		
		//retornar lista do repositório
		when(taskItemRepository.findAll()).thenReturn(taskItems);
		
		final List<TaskItem> result= subject.findAll();
		
		assertThat(result.size(), equalTo(1));
		
		
	}
	
	@Test
	public void testDeleteShouldRemoveRepository() {
		final long idToDelete=50L;
		
		doNothing().when(taskItemRepository).deleteById(idToDelete);

		subject.delete(idToDelete);
		
		verify(taskItemRepository).deleteById(idToDelete);
		
		
	}
	
	@Test
    public void testShouldUpdateTaskItem() {
			long idToUpdate=50L;
			
    		final TaskItem newTaskItem = new TaskItem();
    		newTaskItem.setDescription("I am a task list item");
    		newTaskItem.setId(50L);
    		
    		final TaskItem oldTaskItem = new TaskItem();
    		oldTaskItem.setDescription("I am old");
    		oldTaskItem.setId(50L);
    		
    		
    		when(taskItemRepository.getOne(50L)).thenReturn(oldTaskItem);
    		
    		when(taskItemRepository.save(oldTaskItem)).thenReturn(newTaskItem);
    		
    		TaskItem response = subject.update(idToUpdate, newTaskItem);
    		
    		assertThat(response.getDescription(), equalTo("I am a task list item"));
    		assertThat(response.getId(), equalTo(50L));
    }
	

	
}
