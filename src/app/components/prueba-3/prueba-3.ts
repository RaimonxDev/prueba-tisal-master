import { Component, inject } from "@angular/core";
import Child1 from "./child-1";
import Child2 from "./child-2";
import { CounterService } from "../../service/counter.service";
import { MatButtonModule } from "@angular/material/button";

@Component({
  selector: 'app-prueba-3',
  templateUrl: './prueba-3.html',
  standalone: true,
  imports: [Child1, Child2, MatButtonModule],
  providers: [CounterService]
})
export default class Prueba3 {
  title = 'Prueba';
  countService = inject(CounterService);
}
