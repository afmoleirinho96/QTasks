import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
//added
import { AppComponent } from './app.component';
import { AppRoutingModule} from './app-routing.module';
import { TaskItemListComponent } from './components/task-item-list/task-item-list.component';
@NgModule({
  declarations: [
    AppComponent,
    TaskItemListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
