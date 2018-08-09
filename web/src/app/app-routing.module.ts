import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { TaskItemListComponent } from './components/task-item-list/task-item-list.component';


const routes: Routes=[
    { 
     path:'**',
     component:TaskItemListComponent
    }
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule{ }