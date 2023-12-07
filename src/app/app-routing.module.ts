import { ErrorHandler, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent} from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
import { GalleryComponent } from './gallery/gallery.component';
import { Gallery2Component } from './gallery2/gallery2.component';
import { Gallery3Component } from './gallery3/gallery3.component';

const routes: Routes = [
  {path:'', pathMatch:'full', redirectTo:'/home'},
  {path:'home', component: HomeComponent},
  {path:'contacts', component: ContactComponent},
  {path:'about', component: AboutComponent},
  {path:'login', component:LoginComponent},
  {path:'gallery', component: GalleryComponent},
  {path:'gallery2', component: Gallery2Component},
  {path:'gallery3', component: Gallery3Component},
  {path:'404', component: ErrorComponent},
  {path:'**', redirectTo: '/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
