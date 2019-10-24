import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { RouterModule, Routes} from '@angular/router';

const appRoutes: Routes = [
  {path: 'home',component: HomeComponent},
  {path: 'about',component: AboutComponent},
  {path:'user',children:[
    {path: 'list',component: UserListComponent}
  ]},
  {path: '',redirectTo: '/home',pathMatch:'full'},
  {path:'**',redirectTo: '/home',pathMatch:'full'}
]

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NamesComponent } from './names/names.component';
import { NameTagComponent } from './name-tag/name-tag.component';
import { MainContainerComponent } from './main-container/main-container.component';
import { OuterComponent } from './outer/outer.component';
import { InnerComponent } from './inner/inner.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    NamesComponent,
    NameTagComponent,
    MainContainerComponent,
    OuterComponent,
    InnerComponent,
    HomeComponent,
    AboutComponent,
    UserListComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forChild(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
