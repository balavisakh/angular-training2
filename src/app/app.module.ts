import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { MyAccountComponent } from './components/my-account/my-account.component';
import { MoviesSearchComponent } from './components/movies-search/movies-search.component';
import { MyMoviesComponent } from './components/my-movies/my-movies.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card'; 
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon'; 
import {MatButtonModule} from '@angular/material/button'; 
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {Ng2TelInputModule} from 'ng2-tel-input';
import {MatAutocompleteModule} from '@angular/material/autocomplete'; 
import { MatSelectCountryModule } from '@angular-material-extensions/select-country';
import {HttpClientModule} from '@angular/common/http';
import { Angulartics2Module } from 'angulartics2';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatToolbarModule} from '@angular/material/toolbar';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MyAccountSnakbarComponent } from './components/my-account-snakbar/my-account-snakbar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MyAccountComponent,
    MoviesSearchComponent,
    MyMoviesComponent,
    HeaderComponent,
    PageNotFoundComponent,
    MyAccountSnakbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    Ng2TelInputModule,
    MatAutocompleteModule,
    MatSelectCountryModule.forRoot('en'),
    HttpClientModule,
    Angulartics2Module,
    MatTableModule,
    MatCardModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatSnackBarModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
