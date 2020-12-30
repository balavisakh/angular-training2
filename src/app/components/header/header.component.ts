import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userName:string;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.userName = localStorage.getItem("username");
    console.log(this.userName,"username");
  }
  logout(): void {
    localStorage.clear();
    this.router.navigate(['login']);
  }

}
