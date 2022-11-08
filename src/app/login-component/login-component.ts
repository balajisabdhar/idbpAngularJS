import { Component, OnInit } from '@angular/core';

import { DashboardPageComponent } from '../dashboard-page/dashboard-page.component';

import { Router } from '@angular/router';
import { LoginServiceService } from '../login-service.service';
import { UserModel } from '../user-model.model';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.html',
  styleUrls: ['./login-component.scss']
})
export class LoginComponent implements OnInit {

  userModel:UserModel = new UserModel();
  username:String = "";
  password:String="";

  constructor(private router: Router,private loginService: LoginServiceService) { }

  ngOnInit(): void {
  }

  goToDashboard(){
    
    this.router.navigate(['/dashboard']);
  
  }

  userLogin(){
    this.userModel.setUsername(this.username);
    this.userModel.setPassword(this.password);
    this.loginService.loginUser(this.userModel).subscribe(data=>{
     
      //statusCode: String = JSON.stringif
      var responseStr = JSON.stringify(data);
      var responseJSON = JSON.parse(responseStr);
      console.log(responseJSON);
      if(responseJSON.StatusCode == '200') {
        console.log("Login Succeded");
        this.goToDashboard();
      } else if(responseJSON.StatusCode == '201') {
        alert("Credentials are wrong");
      }

    }, error=>alert("Sorry, Please enter the correct credential"));
  }
}
