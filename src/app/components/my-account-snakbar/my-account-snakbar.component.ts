import { Component, OnInit, Inject } from '@angular/core';
import {MAT_SNACK_BAR_DATA} from '@angular/material/snack-bar';
import {MoviesService} from '../../services/movies.service';
@Component({
  selector: 'app-my-account-snakbar',
  templateUrl: './my-account-snakbar.component.html',
  styleUrls: ['./my-account-snakbar.component.css']
})
export class MyAccountSnakbarComponent implements OnInit {
  myAccount:any = []
  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: string, private moviesService:MoviesService) { }

  ngOnInit(): void {
    this.getMyAccountData();
  }

  getMyAccountData() {
    this.myAccount = this.data;
    console.log(this.myAccount,"json");
  }


}
