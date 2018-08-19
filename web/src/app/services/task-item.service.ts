import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {TaskItem} from '../models/task-item';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class TaskItemService {

  constructor(private http: Http) { }

  private baseUrl = 'api/v1/task-item';

  saveTaskItem(taskItem: TaskItem): Observable<TaskItem> {
    //debugger
    return this.http.post(this.baseUrl, taskItem)
      .map(
        (res: Response)=>res.json())
        //response => console.log(response);
        //err=> console.log(err);
  }

  getTaskItems():Observable<TaskItem[]>{
    return this.http.get(this.baseUrl)
    .map((res :Response) => res.json());

  }

  deleteTaskItem(taskItem: TaskItem){
    return this.http.delete(this.baseUrl + "/" + taskItem.id).map(this.extractData);
  }
  
  updateTaskItem(taskItem: TaskItem): Observable<TaskItem> {  
    return this.http.put(this.baseUrl + "/" + taskItem.id , taskItem)
      .map(
        (res: Response)=>res.json())
  }
  private extractData(res: Response){
    return res.text().length? res.json():{};
  }
}