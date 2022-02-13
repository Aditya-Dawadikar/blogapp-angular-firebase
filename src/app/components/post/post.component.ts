import { Component, OnInit,Input } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css','../../app.component.css']
})
export class PostComponent implements OnInit {

  constructor() { }

  public base_path=environment.base_path

  @Input() post:any

  ngOnInit(): void {
  }

}
