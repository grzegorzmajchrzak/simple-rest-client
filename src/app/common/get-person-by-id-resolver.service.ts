import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Person} from "../datamodel/Person";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {map} from 'rxjs/operators';
import {Injectable} from "@angular/core";

@Injectable()
export class GetPersonByIdResolver implements Resolve<Person> {

  constructor(private http: HttpClient) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Person> {
    let id: number = route.params['id'];
    return this.http.get<Person[]>('/api/read')
      .pipe(map(persons => persons.filter(p => p.id == id)[0]));
  }

}
