import { Component } from '@angular/core';
import { environment } from 'src/environments/environments';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pp';

  constructor() {
    console.log(environment.apiKey);
  }

}
