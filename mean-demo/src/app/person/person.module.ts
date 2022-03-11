import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { PersonDetailComponent } from "./person-detail/person-detail.component";
import { PersonEntryComponent } from "./person-entry/person-entry.component";
import { PersonListComponent } from "./person-list/person-list.component";
import { PersonRoutesModule } from "./person-routes.module";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
    declarations : [
        PersonListComponent,
        PersonDetailComponent,
        PersonEntryComponent
    ],
    imports :[
        CommonModule,
        HttpClientModule,
        ReactiveFormsModule,
        PersonRoutesModule
    ]
})
export class PersonModule {
    constructor(){
        console.log("Person Module Object Created...!");
    }
}