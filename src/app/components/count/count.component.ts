import { Component, inject } from "@angular/core";
import Child1 from "../child-1.component";
import Child2 from "../child-2.component";
import { MatButtonModule } from "@angular/material/button";

@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  standalone: true,
  imports: [Child1, Child2, MatButtonModule],
})
export default class CountComponent {
  title = 'Count';
  count = 0

  add() {
    this.count++;
  }
  sub() {
    this.count--;
  }
}
