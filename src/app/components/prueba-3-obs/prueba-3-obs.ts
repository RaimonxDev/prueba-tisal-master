import { Component, inject } from "@angular/core";
import { CounterObsService } from "../../service/counter.obs.service";
import { MatButtonModule } from "@angular/material/button";
import ChildObs1 from "./child-obs-1";
import ChildObs2 from "./child-obs-2";
import { AsyncPipe } from "@angular/common";

@Component({
  selector: 'app-prueba-3-obs',
  templateUrl: './prueba-3-obs.html',
  standalone: true,
  imports: [ChildObs1, ChildObs2, MatButtonModule, AsyncPipe],
  providers: [CounterObsService]
})
export default class PruebaObs3 {
  title = 'Prueba';
  countService = inject(CounterObsService);
}
