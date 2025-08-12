import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-flight',
  standalone: true,
  imports: [],
  templateUrl: './book-flight.component.html',
  styleUrl: './book-flight.component.css'
})
export class BookFlightComponent implements OnInit {
  flightId: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params =>{
      this.flightId = params.get('flightId') || '';
    })
  }
}
