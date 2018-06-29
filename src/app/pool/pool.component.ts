import { Component, OnInit } from '@angular/core';
import { Pool } from './pool'
import { PoolService } from './pool.service';

@Component({
  selector: 'app-pool',
  templateUrl: './pool.component.html',
  styleUrls: ['./pool.component.css']
})
export class PoolComponent implements OnInit {
  pools: Pool[];
  error;
  
  constructor(
    private poolService: PoolService
  ) { }

  ngOnInit() {
    this.poolService.getPools().subscribe(data => this.pools = data, error => 
      {this.error = error})
  }

}
