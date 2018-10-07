import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Person} from "../datamodel/Person";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  public personName: string = '';

  constructor(private http: HttpClient,
              private router: Router) {
  }

  save() {
    let person = new Person();
    person.name = this.personName;
    this.http.post('/api/create', person)
      .subscribe(() => this.router.navigate(['/read']));
  }

}
