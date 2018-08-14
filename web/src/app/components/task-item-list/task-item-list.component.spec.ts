import { async, ComponentFixture, TestBed } from '@angular/core/testing';
//added

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TaskItemListComponent } from './task-item-list.component';
import { TaskItemService } from '../../services/task-item.service';
import { TaskItemServiceStub } from '../../services/task-item.service.stub';
import { Observable } from 'rxjs/Rx';


describe('TaskItemListComponent', () => {
  let component: TaskItemListComponent;
  let fixture: ComponentFixture<TaskItemListComponent>;
  let taskItemService: TaskItemService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TaskItemListComponent],
      imports: [ReactiveFormsModule, FormsModule],
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
    it("should add a todo item to the todo item array", () => {
      spyOn(taskItemService, 'saveTaskItem').and.returnValue(Observable.of({ id: 1, item: "test" }));
      component.onSubmit({ item: "test" });

      fixture.detectChanges();
      fixture.whenStable().then(()=>{
        fixture.detectChanges();
        expect(component.taskItems.length).toEqual(1);
      });
    });
  });
});

