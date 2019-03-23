import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { courseComponent } from './courses.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AboutComponent } from './about/about.component';
import { RegisterComponent } from './register/register.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { from } from 'rxjs';
import {  customDirective } from './custom.directive';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    courseComponent,
    HomeComponent,
    HeaderComponent,
    LoginComponent,
    ContactComponent,
    RegisterComponent,
    PagenotfoundComponent,
    AboutComponent,
    customDirective
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(
     [ {path:'home',component:LoginComponent},
     {path:'header',component:HomeComponent},
     {path:'about',component:AboutComponent},
     {path:'login',component:LoginComponent},
     {path:'contact',component:ContactComponent},
     {path:'register',component:RegisterComponent},     
     {path:'**',component:PagenotfoundComponent}
     

     ] )
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule{

}


