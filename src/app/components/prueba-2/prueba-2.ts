import { AsyncPipe, JsonPipe } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";

@Component({
  selector: 'app-prueba-2',
  templateUrl: './prueba-2.html',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule, JsonPipe, AsyncPipe],
})
export default class Prueba1 implements OnInit {
  title = 'Edificio Piso Zona';
  ngOnInit(): void { }


  // helper
  deleteDuplicates(data: any[]) {
    const set = new Set(data)
    return [...set]
  }
}
