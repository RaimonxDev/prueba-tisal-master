import { Component } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";

@Component({
  selector: 'app-child-2',
  template: `
    <h3>Child 2 </h3>
    <p class="text-2xl">Count: </p>
      <button mat-stroked-button (click)="sub()">Substract</button>
  `,
  standalone: true,
  imports: [MatButtonModule],
})
export default class Child2 {
  sub() {

  }
}
