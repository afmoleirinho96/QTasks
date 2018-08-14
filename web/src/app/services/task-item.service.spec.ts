import { TestBed, async, inject } from '@angular/core/testing';
import { TaskItemService } from './task-item.service';
import { HttpModule, Http, BaseRequestOptions, XHRBackend, ResponseOptions, Response } from '@angular/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { MockBackend, MockConnection } from '@angular/http/testing';

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

      service.saveTaskItem().subscribe(response => {
        expect(response.id).toEqual(5);
        expect(response.description).toEqual("test");
      })
    })));
  });
});


