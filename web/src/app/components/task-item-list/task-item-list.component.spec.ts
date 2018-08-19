import { async, ComponentFixture, TestBed } from '@angular/core/testing';
//added

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TaskItemListComponent } from './task-item-list.component';
import { TaskItemService } from '../../services/task-item.service';
import { TaskItemServiceStub } from '../../services/task-item.service.stub';
import { Observable } from 'rxjs/Rx';
import { TaskItem } from '../../models/task-item';
import { NgxPaginationModule } from 'ngx-pagination';


describe('TaskItemListComponent', () => {
  let component: TaskItemListComponent;
  let fixture: ComponentFixture<TaskItemListComponent>;
  let taskItemService: TaskItemService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TaskItemListComponent],
      imports: [ReactiveFormsModule, FormsModule, NgxPaginationModule],
      providers: [TaskItemServiceStub]

    })
      .overrideComponent(TaskItemListComponent, { set: { providers: [{ provide: TaskItemService, useClass: TaskItemServiceStub }] } })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    taskItemService = fixture.debugElement.injector.get(TaskItemService);

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  describe("onSubmit", () => {
    it("should add a task item to the todo item array", () => {
      spyOn(taskItemService, 'saveTaskItem').and.returnValue(Observable.of({ id: 1, description: "test" }));
      component.onSubmit({ item: "test" });

      fixture.detectChanges();
      fixture.whenStable().then(() => {
        fixture.detectChanges();
        expect(component.taskItems.length).toEqual(1);
      });
    });

    it("should update a task item and update array", () => {
      spyOn(taskItemService, 'updateTaskItem').and.returnValue(Observable.of({ id: 50, description: "test" }));

      let selectedTaskItem = new TaskItem();
      selectedTaskItem.description = "demo";
      selectedTaskItem.id = 50;

      let oldTaskItem = new TaskItem();
      oldTaskItem.description = "demo";
      oldTaskItem.id = 50;

      component.taskItems.push(oldTaskItem);
      component.selectedTaskItem = selectedTaskItem;
      component.onSubmit({ item: "test" });

      fixture.detectChanges();
      fixture.whenStable().then(() => {
        fixture.detectChanges();
        expect(component.taskItems.length).toEqual(1);
        expect(component.taskItems[0].id).toEqual(50);
        expect(component.taskItems[0].description).toEqual("test");
        //expect(component.selectedTaskItem).toBeNull();
      });
    });
  });

  describe("ngOnInit", () => {
    it("should add two taskItems to the taskitems Array", () => {
      spyOn(taskItemService, 'getTaskItems').and.returnValue(Observable.of([
        { id: 1, item: "teste1" },
        { id: 2, item: "test2" }
      ]));
      component.ngOnInit();

      fixture.detectChanges()
      fixture.whenStable().then(() => {
        fixture.detectChanges();

        expect(component.taskItems.length).toEqual(2);

      });
    });
  });
  describe("onDelete", () => {
    it("should remove a task item to the todo item array", () => {


      let taskItem1 = new TaskItem();
      taskItem1.description = "test";
      taskItem1.id = 50;

      let taskItem2 = new TaskItem();
      taskItem2.description = "test2";
      taskItem2.id = 60;


      spyOn(taskItemService, 'deleteTaskItem').and.returnValue(Observable.of(taskItem1));
      component.taskItems.push(taskItem1);
      component.taskItems.push(taskItem2);



      component.onDelete(taskItem1, event);

      fixture.detectChanges();
      fixture.whenStable().then(() => {
        fixture.detectChanges();
        expect(component.taskItems.length).toEqual(1);
      });
    });
  });

  describe('selectTaskItem', () => {
    it('set selectedTaskItem', () => {
      let taskItem = new TaskItem();
      taskItem.description = "demo";
      taskItem.id = 50;

      component.selectTaskItem(taskItem);
      expect(component.selectedTaskItem.description).toEqual("demo");
      expect(component.selectedTaskItem.id).toEqual(50);


    })
  });



}); 
