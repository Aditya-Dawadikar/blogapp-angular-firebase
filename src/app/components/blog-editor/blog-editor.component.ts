import { Component, OnInit } from '@angular/core';
import {FormBuilder,Validators} from '@angular/forms'
import {UsersService} from '../../services/users.service'
import {BlogsService} from '../../services/blogs.service'

@Component({
  selector: 'app-blog-editor',
  templateUrl: './blog-editor.component.html',
  styleUrls: ['./blog-editor.component.css','../../app.component.css']
})
export class BlogEditorComponent implements OnInit {

  constructor(private fb:FormBuilder,private user:UsersService,private blog:BlogsService) { }

  public newblog=this.fb.group({
    title:['',Validators.required],
    content:['',Validators.required]
  })

  ngOnInit(): void {
  }

  handlePublish(){
    let newblogObject:any={
      title:"",
      author:"",
      content:""
    }
    newblogObject.title=this.newblog.value.title
    newblogObject.content=this.newblog.value.content
    newblogObject.author=this.user.getCurrentUserData().username

    this.blog.addNewBlog(newblogObject)
  }
}
