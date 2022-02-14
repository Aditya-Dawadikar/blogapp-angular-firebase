import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UsersService } from '../../services/users.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', '../../app.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder, private user: UsersService) {

  }

  loginData = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]]
  })

  ngOnInit(): void {
  }

  handleLoginSubmit() {
    // console.log(this.loginData.value)
    if (this.loginData.status == 'VALID') {
      this.user.login(this.loginData.value.email, this.loginData.value.password)
    }else{
      alert("please enter email and password")
    }
  }
  
  handleGoogleSignin() {
    this.user.SigninWithGoogle()
  }

}
