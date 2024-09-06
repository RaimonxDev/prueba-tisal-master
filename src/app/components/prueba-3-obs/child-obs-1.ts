import { Component, inject } from "@angular/core";
import { CounterObsService } from "../../service/counter.obs.service";
import { AsyncPipe } from "@angular/common";


@Component({
  selector: 'app-child-obs-1',
  template: `
    <h3>Child obs 1</h3>
    <p>Count: {{count$ | async}}</p>
  `,
  standalone: true,
  imports: [AsyncPipe],
  providers: [CounterObsService]
})
export default class ChildObs1 {
  private countService = inject(CounterObsService);
  count$ = this.countService.count
}
