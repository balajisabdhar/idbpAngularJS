import { Component, OnInit } from '@angular/core';

import { DashboardPageComponent } from '../dashboard-page/dashboard-page.component';

import { Router } from '@angular/router';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.html',
  styleUrls: ['./login-component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToDashboard(){
    
    this.router.navigate(['/idbp']);
  
  }
}
