import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from './person.model';


@Injectable({
  providedIn: 'root'
})
export class PersonService {

  baseUrl : string = 'http://localhost:9090/api';

  constructor(private httpClient : HttpClient) { }

  getAllPersons() : Observable<Person[]> {
    return this.httpClient.get<Person[]>(this.baseUrl+"/persons");
  }

  getPersonById(personId : number) : Observable<Person> {
    return this.httpClient.get<Person>(this.baseUrl+"/persons/"+personId);
  }
}
