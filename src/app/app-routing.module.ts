import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {ReadComponent} from "./read/read.component";
import {CreateComponent} from "./create/create.component";
import {UpdateComponent} from "./update/update.component";
import {GetPersonByIdResolver} from "./common/get-person-by-id-resolver.service";
import {DeleteComponent} from "./delete/delete.component";

const routes: Routes = [
  {path: 'read', component: ReadComponent},
  {path: 'create', component: CreateComponent},
  {path: 'update/:id', component: UpdateComponent, resolve: {person: GetPersonByIdResolver}},
  {path: 'delete/:id', component: DeleteComponent, resolve: {person: GetPersonByIdResolver}},
  {path: '**', redirectTo: '/read'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [GetPersonByIdResolver]
})
export class AppRoutingModule {
}
