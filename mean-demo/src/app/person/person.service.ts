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

  savePerson(person : Person) : Observable<Person>{
    return this.httpClient.post<Person>(this.baseUrl+"/person",person);
  }

  updatePerson(person : Person,id : number) : Observable<any>{
    return this.httpClient.put<any>(this.baseUrl+"/person/"+id,person);
  }

  deletePerson(id : number) : Observable<any> {
    return this.httpClient.delete<any>(this.baseUrl+"/person/"+id);
  }
}
