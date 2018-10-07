import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {Person} from "../datamodel/Person";

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  public person: Person;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private http: HttpClient) {
  }

  ngOnInit() {
    this.route.data.subscribe(params => {
      this.person = params['person'];
    });
  }

  delete(): void {
    this.http.delete('/api/delete/' + this.person.id)
      .subscribe(() => this.router.navigate(['/read']));
  }
}
