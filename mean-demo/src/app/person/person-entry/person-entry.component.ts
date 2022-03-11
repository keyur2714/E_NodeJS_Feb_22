import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ActionSequence } from 'protractor';
import { Person } from '../person.model';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-person-entry',
  templateUrl: './person-entry.component.html',
  styleUrls: ['./person-entry.component.css']
})
export class PersonEntryComponent implements OnInit {

  personEntryForm : FormGroup;
  updatedId : number = -1;

  constructor(private formBuilder : FormBuilder,private personService : PersonService,private router : Router,private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.createPersonEntryForm();
    this.updatedId = this.activatedRoute.snapshot.params.id;
    if(this.updatedId === undefined){
      this.updatedId = 0;
    }else{
      this.personService.getPersonById(this.updatedId).subscribe(
        (data)=>{
          this.personEntryForm.setValue({name : data.name,city : data.city,mobileNo : data.mobileNo,email : data.email});
        },
        (error)=>{

        }
      )
    }    
  }

  createPersonEntryForm() : void {
    this.personEntryForm = this.formBuilder.group({
      name : this.formBuilder.control('',Validators.required),
      city : this.formBuilder.control('',Validators.required),
      mobileNo : this.formBuilder.control('',[Validators.required,Validators.pattern("^[0-9]+$"),Validators.maxLength(10)]),
      email : this.formBuilder.control('',[Validators.required,Validators.email]),
    });
  }

  save() : void {
    if(this.personEntryForm.valid){
      let person : Person = this.personEntryForm.value;
      this.personService.savePerson(person).subscribe(
        (data : Person)=>{
          alert("Person Saved Successfully with id : "+data.id)
          this.router.navigate(['/persons']);
        },
        (error)=>{

        }
      )
    }
  }

  update() : void {
    if(this.personEntryForm.valid){
      let person : Person = this.personEntryForm.value;      
      this.personService.updatePerson(person,this.updatedId).subscribe(
        (data : any)=>{
          alert(data.message);
          this.router.navigate(['/persons']);
        },
        (error)=>{

        }
      )
    }
  }
}
