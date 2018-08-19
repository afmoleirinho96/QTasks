import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, FormGroup, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
//added

import { AppComponent } from './app.component';
import { AppRoutingModule} from './app-routing.module';
import { TaskItemListComponent } from './components/task-item-list/task-item-list.component';
import { TaskItemService } from './services/task-item.service';
import {NgxPaginationModule} from 'ngx-pagination';
@NgModule({
  declarations: [
    AppComponent,
    TaskItemListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgxPaginationModule
    
  ],
  providers: [TaskItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }

