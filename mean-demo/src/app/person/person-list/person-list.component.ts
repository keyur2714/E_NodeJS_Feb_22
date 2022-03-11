import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { config } from 'process';
import { Person } from '../person.model';

import { PersonService } from '../person.service';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {

  personList : Person[] = [];

  constructor(private personService : PersonService,private router : Router) { }

  ngOnInit(): void {
    this.getAllPersons();
  }

  getAllPersons() : void {
    this.personService.getAllPersons().subscribe(
      (data)=>{
        this.personList = data;
      },
      (error)=>{

      }
    )
  }

  edit(id : number) : void {
    this.router.navigate(['/person-update',id]);
  }

  delete(id : number) : void {
    let confirmMsg=confirm("Are you sure want to delete Person with id : "+id);
      if(confirmMsg){
        this.personService.deletePerson(id).subscribe(
          (data)=>{
            alert(data.message);
            this.getAllPersons();
          },
          (error)=>{
    
          }
        )
      }
    }    
}
