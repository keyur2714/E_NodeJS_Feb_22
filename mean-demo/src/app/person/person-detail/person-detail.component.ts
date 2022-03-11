import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Person } from '../person.model';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.css']
})
export class PersonDetailComponent implements OnInit {

  person : Person = new Person();

  constructor(private activatedRoute : ActivatedRoute,private personService : PersonService,private location : Location) { }

  ngOnInit(): void {
    let personId : number = this.activatedRoute.snapshot.params.id;
    this.personService.getPersonById(personId).subscribe(
      (data)=>{
        this.person = data;
      },
      (error)=>{
        
      }
    )
  }

  back() : void {
    this.location.back();
  }

}
