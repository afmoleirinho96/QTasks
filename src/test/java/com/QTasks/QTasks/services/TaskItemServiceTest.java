package com.QTasks.QTasks.services;

import static org.hamcrest.CoreMatchers.equalTo;
import static org.junit.Assert.assertThat;
import static org.mockito.Mockito.when;

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

	
}
