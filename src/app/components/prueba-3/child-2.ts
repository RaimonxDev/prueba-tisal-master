import { Component, computed, inject } from "@angular/core";
import { CounterService } from "../../service/counter.service";

@Component({
  selector: 'app-child-2',
  template: `
    <h3>Child 2</h3>
    <p>Count: {{count()}}</p>
  `,
  standalone: true,
  imports: [],
  providers: [CounterService]
})
export default class Child2 {
  private countService = inject(CounterService);
  count = computed(() => this.countService.count());

}
