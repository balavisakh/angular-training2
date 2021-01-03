import { Component, OnInit } from '@angular/core';
import {MoviesService} from '../../services/movies.service';
import {Subscription} from 'rxjs';
@Component({
  selector: 'app-my-movies',
  templateUrl: './my-movies.component.html',
  styleUrls: ['./my-movies.component.css']
})
export class MyMoviesComponent implements OnInit {
  selectedMovieList = [];
  subscription: Subscription;
  movieIds = [];
  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.getSelectedMovies();
    this.getData(); 
  }

  getSelectedMovies() {
    this.subscription = this.moviesService.getValue().subscribe((selectedMovies)=>{
      this.selectedMovieList = selectedMovies;
      console.log(this.selectedMovieList,"selectedMovies");
    })
  }

  getData() {
    this.selectedMovieList = this.moviesService.getData();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  deleteMovie(movieId) {
    for(let i=0; i< this.selectedMovieList.length; i++) {
      if( this.selectedMovieList[i].imdbID === movieId) {
        this.selectedMovieList.splice(i,1);
        break;
      }
    }
  }
}
