import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkeletonComponent } from './layout/skeleton/skeleton.component';

const routes: Routes = [
  { path:'', redirectTo: '/home', pathMatch: 'full' },
  {
    path:'', component: SkeletonComponent,
    children:[
      {
        path: 'home',
        loadChildren:() => 
          import('./modules/dashboard/dashboard.module').then( (m)=> m.DashboardModule)
      },
      {
        path: 'contact',
        loadChildren:() => 
          import('./modules/contact/contact.module').then( (m)=> m.ContactModule)
      },
      {
        path: 'about',
        loadChildren:() => 
          import('./modules/about/about.module').then( (m)=> m.AboutModule)
      },
      { path:'**', redirectTo: '/home', pathMatch: 'full' },
    ]
  },
  { path:'**', redirectTo: '/home', pathMatch: 'full' },
];



@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }