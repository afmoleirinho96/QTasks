import { Observable } from "rxjs/Rx";

export class TaskItemServiceStub {
    saveTaskItem() {
        return Observable.of();
    }
}