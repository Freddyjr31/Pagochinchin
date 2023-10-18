import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewLoginComponent } from './containers/view-login/view-login.component';
import { ViewHomeComponent } from './containers/view-home/view-home.component';

const routes: Routes = [ {
  path: '',
  redirectTo: 'login',
  pathMatch: 'full'
},
{
  path: 'login',
  component: ViewLoginComponent,
  data: {
    title: 'Login'
  },
},
{
  path: 'home',
  component: ViewHomeComponent,
  data: {
    title: 'Home'
  },
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
