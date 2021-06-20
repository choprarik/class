import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { StudentDetailComponent } from './components/student-detail.component';
import { StudentListingComponent } from './components/student-listing.component';

const routes: Routes = [{
  path: 'students',
  component: StudentListingComponent
},
{
  path: 'students/:id',
  component: StudentDetailComponent
},
{
  path: '**',
  component: AppComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
