import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
@Component({
  selector: 'product-star',
  templateUrl: './product-star/product-star.component.html'
})
export class AppComponent {
  title = 'my-test-app';
}
