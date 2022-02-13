import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css','../../app.component.css']
})
export class NavbarComponent implements OnInit {

  public base_path=environment.base_path
  public render = false
  public curruser:any = {}
  public show = false

  constructor(private user:UsersService) { 
    this.curruser = this.user.getCurrentUserData()
    if(this.curruser!==null){
      this.render=true
    }else{
      this.render==false
    }
  }

  ngOnInit(): void {
  }

  toggleShow(){
    this.show=!this.show
  }

  signout(){
    this.user.signout()
    window.sessionStorage.clear()
    window.location.href=environment.base_path
  }

}
