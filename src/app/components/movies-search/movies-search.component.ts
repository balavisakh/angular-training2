import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounce, debounceTime, map } from 'rxjs/operators';
import { MoviesService } from '../../services/movies.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { SelectionModel } from '@angular/cdk/collections';
import { Router } from '@angular/router';
@Component({
  selector: 'app-movies-search',
  templateUrl: './movies-search.component.html',
  styleUrls: ['./movies-search.component.css'],
})
export class MoviesSearchComponent implements OnInit {
  movies: any = [];
  displayedColumns: string[] = ['select', 'poster', 'title', 'name'];
  dataSource:any = new MatTableDataSource();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  selection = new SelectionModel(true, []);
  selectedRows: any = [];
  results$: Observable<any>;
  subject = new Subject();
  private searchUpdated: Subject<any> = new Subject();
  constructor(private moviesService: MoviesService, private router: Router) {}

  ngOnInit(): void {
    // this.getMovies();
    this.results$ = this.subject.pipe(
      debounceTime(1000),
      map((searchText) => this.searchMovies(searchText))
    );
    this.results$.subscribe();
    this.callOnDataLoad(this.moviesService.getData());
    // this.sendVal();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    // this.dataSource.sort = this.sort;
  }

  searchMovieDebounce(evt) {
    this.subject.next(evt.target.value);
  }
  searchMovies(searchText: any) {
    // const searchText = evt.target.value;
    console.log(searchText, 'serachtext');
    this.moviesService.getMovies(searchText).subscribe((value) => {
      this.callOnDataLoad(value);
    });
  }
  callOnDataLoad(value: any) {
    console.log(value, 'srch res');
      this.movies = value;
      if (this.movies?.length) {
        this.dataSource.data = this.movies;
        console.log(this.dataSource.data, 'final res');
      }
  }

  // applyFilter(event: Event) {
  //   const filterValue = (event.target as HTMLInputElement).value;
  //   this.dataSource.filter = filterValue.trim().toLowerCase();
  // }

  // checkbox

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    // this.selectedRows = this.selection.selected;
    // console.log(this.selectedRows,"selected rows");
    // this.sendVal();
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected()
      ? this.selection.clear()
      : this.dataSource.data.forEach((row) => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${
      row.position + 1
    }`;
  }

  // selectedMovies() {
  //   this.moviesService.sendValue(this.selectedRows);
  //   console.log(this.selectedRows,"selected Rows");
  // }

  sendVal() {
    this.moviesService.sendData(this.dataSource.data);
  }

  selectRow($event, row) {
    // console.log($event.checked);
    // if ($event.checked) {

    //   console.log(dataSource, 'source');
    //   this.selectedRows.push(dataSource);

    //   this.sendVal();
    // }
    let rowIndex = this.dataSource.data.indexOf(row);
    if(rowIndex !=-1){
      this.dataSource.data[rowIndex].isChecked = $event.checked;
    }
    console.log(this.dataSource.data,'test')
    this.sendVal()
  }

  selectAllRow($event) {
    // if ($event.checked) {
    //   console.log($event.checked, this.selection.selected);
    //   this.selectedRows = this.selection.selected;
    // }
    this.dataSource.data.forEach(movie => {
      movie.isChecked = $event.checked;      
    });
    this.sendVal();
  }
  toggleAndRowSelect($event, row)
  {
    this.selection.toggle(row);
    this.selectRow($event, row);
  }
}
