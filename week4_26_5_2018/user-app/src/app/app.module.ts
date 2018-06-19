import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { FormsModule } from '@angular/forms';


import { PipeComponent } from './components/pipe/pipe.component';
import { ExponentialStrengthPipe } from './square.pipe'
import { PostComponent } from './components/post/post.component';
import { HttpModule } from '@angular/http';
import { map } from 'rxjs/operators';
import { RouterModule, Routes } from '@angular/router'
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AvatarUserComponent } from './components/avatar-user/avatar-user.component';

const appRoutes: Routes=[{path: 'posts', component: PostComponent},
{path: 'users', component: UsersComponent},
{path: 'avatarUser', component: AvatarUserComponent}]

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    PipeComponent,
    ExponentialStrengthPipe,
    PostComponent,
    AvatarUserComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
