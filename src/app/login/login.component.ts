import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string;
  pwd: string;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    if (this.username === 'neha' && this.pwd === 'neha') {
      this.router.navigate(['\home']);
    }
  }
}
