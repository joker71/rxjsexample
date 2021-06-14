import { Component, OnInit } from '@angular/core';
import { ServiceService } from './service.service';

@Component({
  selector: 'app-case1',
  templateUrl: './case1.component.html',
  styleUrls: ['./case1.component.css']
})
export class Case1Component implements OnInit {

  constructor(private service: ServiceService) { }

  ngOnInit(): void {
    this.service.getApi().subscribe((res) => {
      console.log(res.body);
    })
  }

}
