import {Component, Input} from '@angular/core';
import {Person} from "../datamodel/Person";

@Component({
  selector: 'app-person-view',
  templateUrl: './person-view.component.html',
  styleUrls: ['./person-view.component.css']
})
export class PersonViewComponent{

  @Input()
  person: Person;

  constructor() {
  }

}
