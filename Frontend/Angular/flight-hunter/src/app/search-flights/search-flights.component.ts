import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-search-flights',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './search-flights.component.html',
  styleUrl: './search-flights.component.css'
})
export class SearchFlightsComponent {
  flights: FlightDeailInterface[] = [
    {airline: 'Air India', arrival: {time: Date.now().toString(), place: 'New York'}, departure: {time: Date.now().toString(), place: 'Los Angeles'}, remainingSeats: 50, price: 300},
    {airline: 'Delta Airlines', arrival: {time: Date.now().toString(), place: 'Chicago'}, departure: {time: Date.now().toString(), place: 'Los Angeles'}, remainingSeats: 30, price: 250},
    {airline: 'United Airlines', arrival: {time: Date.now().toString(), place: 'San Francisco'}, departure: {time: Date.now().toString(), place: 'Los Angeles'}, remainingSeats: 20, price: 400},
    {airline: 'Southwest Airlines', arrival: {time: Date.now().toString(), place: 'Miami'}, departure: {time: Date.now().toString(), place: 'Los Angeles'}, remainingSeats: 15, price: 350},
    {airline: 'JetBlue Airways', arrival: {time: Date.now().toString(), place: 'Boston'}, departure: {time: Date.now().toString(), place: 'Los Angeles'}, remainingSeats: 25, price: 280}
  ];
}

export interface FlightDeailInterface {
  airline: string;
  arrival: TimePlaceInterface;
  departure: TimePlaceInterface;
  remainingSeats: number;
  price: number;
}

export interface TimePlaceInterface {
  time: string;
  place: string;
}
