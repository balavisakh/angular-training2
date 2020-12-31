import { Component, OnInit } from '@angular/core';
import {MoviesService} from '../../services/movies.service';
import {Subscription} from 'rxjs';
@Component({
  selector: 'app-my-movies',
  templateUrl: './my-movies.component.html',
  styleUrls: ['./my-movies.component.css']
})
export class MyMoviesComponent implements OnInit {
  selectedMovieLists = [];
  subscription: Subscription;
  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.getSelectedMovies();
    this.getData(); 
  }

  getSelectedMovies() {
    this.subscription = this.moviesService.getValue().subscribe((selectedMovies)=>{
      this.selectedMovieLists = selectedMovies;
      console.log(this.selectedMovieLists,"selectedMovies");
    })
  }

  getData() {
    let data = this.selectedMovieLists = this.moviesService.getData();
    console.log(data,"data");
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
