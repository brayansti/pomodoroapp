import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OptionsComponent } from './components/options/options.component';


const routes: Routes = [
  { path: 'options', component: OptionsComponent },
  // { path: 'heroes',        component: HeroListComponent },
  // { path: '',   redirectTo: '/heroes', pathMatch: 'full' },
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
