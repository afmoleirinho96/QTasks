import { TestBed, async, inject } from '@angular/core/testing';
import { TaskItemService } from './task-item.service';
import { HttpModule, Http, BaseRequestOptions, XHRBackend, ResponseOptions, Response } from '@angular/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { TaskItem } from '../models/task-item';


describe('TaskItemService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [TaskItemService, MockBackend, BaseRequestOptions,
        {
          provide: Http,
          useFactory: (backend, options) => new Http(backend, options),
          deps: [MockBackend, BaseRequestOptions]
        }
      ]
    });
  });

  it('should be created', inject([TaskItemService], (service: TaskItemService) => {
    expect(service).toBeTruthy();
  }));


  describe('saveTaskItem', () => {
    it("should return task item", async(inject([TaskItemService, MockBackend], (service, backend) => {
      backend.connections.subscribe(c => {
        c.mockRespond(new Response(new ResponseOptions({ status: 200, body: JSON.stringify({ description: "test", id: 5 }) })))
      })


      let taskItem= new TaskItem();


      service.saveTaskItem(taskItem).subscribe(response => {
        expect(response.id).toEqual(5);
        expect(response.description).toEqual("test");
      })
    })));
  });

  describe('updateTaskItem', () => {
    it("should return task item", async(inject([TaskItemService, MockBackend], (service, backend) => {
      backend.connections.subscribe(c => {
        c.mockRespond(new Response(new ResponseOptions({ status: 200, body: JSON.stringify({ description: "test", id: 5 }) })))
      })


      let taskItem= new TaskItem();

      service.updateTaskItem(taskItem).subscribe(response => {
        expect(response.id).toEqual(5);
        expect(response.description).toEqual("test");
      })
    })));
  });

  describe('getTaskItem', () => {
    it("should return two task items", async(inject([TaskItemService, MockBackend], (service, backend) => {
      backend.connections.subscribe(c => {
        c.mockRespond(new Response(new ResponseOptions({
          status: 200, body: JSON.stringify(
            [
              { description: "test2", id: 2 },
              { description: "test4", id: 4 }

            ]
          )
        })))
      })

      service.getTaskItems().subscribe(response => {
        expect(response.length).toEqual(2);

        expect(response[0].id).toEqual(2);


      })
    })));
  });

  describe('deleteTaskItem', () => {
    it("should have a 200 response on success", async(inject([TaskItemService, MockBackend], (service, backend) => {
      backend.connections.subscribe(c => {
        c.mockRespond(new Response(new ResponseOptions(
          {status: 200})))
      })
      let taskItem = new TaskItem();
      taskItem.description = "test";
      taskItem.id = 50;
      service.deleteTaskItem(taskItem).subscribe(response => {
        expect(response).toEqual({});
      })
    })));
  });
});
