import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {TaskItem} from '../../models/task-item';
import {TaskItemService} from '../../services/task-item.service';

@Component({  
  selector: 'app-task-item-list',
  templateUrl: './task-item-list.component.html',
  styleUrls: ['./task-item-list.component.css'],
  providers: [TaskItemService]
})
export class TaskItemListComponent implements OnInit {

  constructor(private formBuilder:FormBuilder, private taskItemService: TaskItemService) { 
    this.createForm();
  }

  private createForm() {
    this.taskForm=this.formBuilder.group({
    item:''
    })
  }

  taskForm: FormGroup;
  taskItems:TaskItem[]=[];

  ngOnInit() {
  }
  onSubmit(model) {
    const taskItemToSave: TaskItem={
      id:null,
      description:model.item
    }
    this.taskItemService.saveTaskItem(taskItemToSave).subscribe(taskItem => this.taskItems.push(taskItem));


    this.taskForm.reset();
  }

}
