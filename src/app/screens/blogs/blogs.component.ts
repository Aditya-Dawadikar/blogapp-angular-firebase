import { Component, OnInit } from '@angular/core';

import {BlogsService} from '../../services/blogs.service'
 
@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css','../../app.component.css']
})
export class BlogsComponent implements OnInit {

  public blogs:any[]=[];

  constructor(private bs:BlogsService) {
  }

  ngOnInit(): void {
    this.blogs=this.bs.getBlogs()
  }

}
