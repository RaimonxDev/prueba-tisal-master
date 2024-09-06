import { Component, computed, inject } from "@angular/core";
import { CounterService } from "../../service/counter.service";

@Component({
  selector: 'app-child-1',
  template: `
    <h3>Child 1</h3>
    <p>Count: {{count()}}</p>
  `,
  standalone: true,
  imports: [],
  providers: [CounterService]
})
export default class Child1 {
  private countService = inject(CounterService);
  count = computed(() => this.countService.count());

}
