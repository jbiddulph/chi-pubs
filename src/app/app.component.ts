import {Component, OnInit} from '@angular/core';
import {Pub} from './models/pub.model';
import {DataService} from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  thepubs: Pub[];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    return this.dataService.getPubs()
      .subscribe(data => this.thepubs = data);
  }
}
