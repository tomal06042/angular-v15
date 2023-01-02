import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './layout/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactService } from './service/contact/contact.service';

const routes: Routes = [
  {path:"login", component: LoginComponent},
  {path: "about", component: AboutComponent},
  {path: "contact", component: ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
