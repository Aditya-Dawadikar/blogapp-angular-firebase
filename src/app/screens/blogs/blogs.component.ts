import { Component, OnInit } from '@angular/core';

import {BlogsService} from '../../services/blogs.service'
import { FilterService } from 'src/app/services/filter.service';
 
@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css','../../app.component.css']
})
export class BlogsComponent implements OnInit {

  public blogs:any[]=[];

  constructor(private bs:BlogsService,private fs:FilterService) {
    this.fs.$filterService.subscribe((data:any)=>{
      this.blogs=data
    })
  }

  ngOnInit(): void {
    this.blogs=this.bs.getBlogs()
  }

}
