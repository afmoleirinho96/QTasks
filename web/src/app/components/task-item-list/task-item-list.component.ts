import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TaskItem } from '../../models/task-item';
import { TaskItemService } from '../../services/task-item.service';

@Component({
  selector: 'app-task-item-list',
  templateUrl: './task-item-list.component.html',
  styleUrls: ['./task-item-list.component.css'],
  providers: [TaskItemService]
})
export class TaskItemListComponent implements OnInit {



  constructor(private formBuilder: FormBuilder, private taskItemService: TaskItemService) {
    this.createForm();
  }

  @ViewChild("description") descriptionInput: ElementRef;
  private createForm() {
    this.taskForm = this.formBuilder.group({
      item: '',
      //completed:false
    })
  }

  taskForm: FormGroup;
  selectedTaskItem: TaskItem;
  taskItems: TaskItem[] = [];

  ngOnInit() {
    this.taskItemService.getTaskItems().subscribe(
      taskItems => this.taskItems = taskItems
    );
  }
  onSubmit(model) {
    const taskItemToSave: TaskItem = {
      id: this.selectedTaskItem ? this.selectedTaskItem.id : null,
      description: model.item,
      //completed:model.completed
    }
    if (!this.selectedTaskItem) {
      this.taskItemService.saveTaskItem(taskItemToSave).subscribe(taskItem => this.taskItems.push(taskItem));

    } else {
      this.taskItemService.updateTaskItem(taskItemToSave).subscribe(result => this.taskItems.filter(
        (taskItem => this.isSameTaskItem(result, taskItem)
        ))[0].description = result.description);
    }

    this.selectedTaskItem = null;
    this.taskForm.reset();
  }
  private isSameTaskItem(searchBy: TaskItem, lookingFor: TaskItem) {
    return searchBy.id === lookingFor.id;
  }

  
  onDelete(taskItemToRemove: TaskItem, event) {
    this.taskItemService.deleteTaskItem(taskItemToRemove).subscribe(
      res => {
        this.taskItems = this.taskItems.filter(
          taskItem => taskItem.id !== taskItemToRemove.id
        )
        this.descriptionInput.nativeElement.focus();
      }
    )
  }



  selectTaskItem(taskItem: TaskItem) {
    this.selectedTaskItem = taskItem;
    this.taskForm.controls["item"].setValue(taskItem.description);
    this.descriptionInput.nativeElement.focus();


  }
}
