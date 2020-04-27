import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewComponent } from './view/view.component';
import { AddSpeachComponent } from './add-speach/add-speach.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
{path: '', redirectTo: '/', pathMatch: 'full'},
{path: '', component: AddSpeachComponent},
{path: 'add-speach',component: AddSpeachComponent},
{path: 'view',component: ViewComponent},
{path: 'search', component: SearchComponent}
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
