import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-page-2',
  templateUrl: './page-2.component.html',
  standalone: true,
  imports: [MatButtonModule],
})
export class Page2Component {

  count = 0
  constructor() { }

  add() {
    this.count++;
  }
  sub() {
    this.count--;
  }

}
