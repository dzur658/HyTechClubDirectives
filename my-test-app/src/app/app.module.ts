import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductStarComponent } from './product-star/product-star.component';
import { TodoListComponent } from './todo-list/todo-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductStarComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
    //remember to add imported module to imports
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
