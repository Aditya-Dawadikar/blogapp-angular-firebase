import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogEditorComponent } from './components/blog-editor/blog-editor.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PostComponent } from './components/post/post.component';
import { UsersidebarComponent } from './components/usersidebar/usersidebar.component';
import { BlogsComponent } from './screens/blogs/blogs.component';
import { EditorComponent } from './screens/editor/editor.component';
import { LoginComponent } from './screens/login/login.component';
import { ReadBlogComponent } from './screens/read-blog/read-blog.component';
import { UserComponent } from './screens/user/user.component';

import { environment } from 'src/environments/environment';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';

@NgModule({
  declarations: [
    AppComponent,
    BlogEditorComponent,
    NavbarComponent,
    PostComponent,
    UsersidebarComponent,
    BlogsComponent,
    EditorComponent,
    LoginComponent,
    ReadBlogComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
