import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PersonDetailComponent } from "./person-detail/person-detail.component";
import { PersonEntryComponent } from "./person-entry/person-entry.component";
import { PersonListComponent } from "./person-list/person-list.component";

const routes : Routes = [
    {path : 'persons' , component : PersonListComponent},
    {path : 'person-entry',component : PersonEntryComponent},
    {path : 'person-detail/:id',component : PersonDetailComponent}
];

@NgModule({
    imports : [RouterModule.forChild(routes)],
    exports : [RouterModule]
})
export class PersonRoutesModule {
    constructor(){
        console.log("Person Routes Module Object Created...!");
    }
}