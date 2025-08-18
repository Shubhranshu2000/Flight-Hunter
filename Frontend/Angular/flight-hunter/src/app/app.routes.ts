import { Routes } from '@angular/router';
import { SearchFlightsComponent } from './search-flights/search-flights.component';
import { BookFlightComponent } from './book-flight/book-flight.component';
import { RegisterPassengerComponent } from './register-passenger/register-passenger.component';
import { LoginUserComponent } from './login-user/login-user.component';

export const routes: Routes = [
  {path: '', component: SearchFlightsComponent},
  {path: 'search-flights', component: SearchFlightsComponent},
  {path: 'book-flight/:flightId', component: BookFlightComponent},
  {path: 'register-user', component: RegisterPassengerComponent},
  {path: 'login-user', component: LoginUserComponent}
];
