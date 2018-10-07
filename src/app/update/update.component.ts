import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Person} from "../datamodel/Person";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  public person: Person = null;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private http: HttpClient) {
  }

  ngOnInit() {
    this.route.data.subscribe(params => {
      this.person = params['person'];
    });
  }

  update(): void {
    this.http.put('/api/update', this.person)
      .subscribe(() => this.router.navigate(['/read']));
  }

}
