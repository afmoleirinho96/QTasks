import { Observable } from "rxjs/Rx";

export class TaskItemServiceStub {
    saveTaskItem() {
        return Observable.of();
    }
    getTaskItems() {
        return Observable.of();
    }

    deleteTaskItem(){
        return Observable.of();
    }

    updateTaskItem(){
        return Observable.of();
    }
}