import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
})
export class PersonsComponent {
  //Input - This personList property of this compoennt can be bound from outside
  @Input() personList: string[];
}
