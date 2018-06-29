import { Component, OnInit } from '@angular/core';
import { ClimbingGym } from './climb';
import { ClimbService } from './climb.service';

@Component({
  selector: 'app-climb',
  templateUrl: './climb.component.html',
  styleUrls: ['./climb.component.css']
})
export class ClimbComponent implements OnInit {

  climbs: ClimbingGym[];
  error;

  constructor(
    private climbService: ClimbService
  ) { }

  ngOnInit() {
    this.climbService.getClimbingGyms().subscribe(data => this.climbs = data, error => {this.error = error}
    )
  }

}
