import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { BlogsService } from './blogs.service';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  public $filterService:BehaviorSubject<any[]> = new BehaviorSubject<any[]>([])
  currBlogs = this.$filterService.asObservable()

  constructor(private blogs: BlogsService) { }

  applyFilter(querystring:string) {
    let allBlogs = this.blogs.getCurrBlogs()
    let filteredBlogs = this.query(querystring,allBlogs)
    this.$filterService.next(filteredBlogs)
  }

  clearFilter(){
    this.$filterService.next(this.blogs.getCurrBlogs())
  }

  query(querystring: string, blogs: any[]) {
    let temp = []
    if (querystring !== "") {
      let filter = querystring.toUpperCase()  
      for (let i = 0; i < blogs.length; i++) {
        if (blogs[i].title.toUpperCase().indexOf(filter) > -1 || blogs[i].author.toUpperCase().indexOf(filter) > -1) {
          // show this
          temp.push(blogs[i])
        }
      }
    }
    return temp
  }
}
