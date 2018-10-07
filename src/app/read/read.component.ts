import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Person} from "../datamodel/Person";
import {Observable} from "rxjs";

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {

  public persons$: Observable<Person[]> = null;

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.persons$ = this.http.get<Person[]>('/api/read');
  }

}
