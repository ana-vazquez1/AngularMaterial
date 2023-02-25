import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { HttpClient } from '@angular/common/http';
import { data } from '../app.module';
@Component({
  selector: 'app-my-dashboard',
  templateUrl: './my-dashboard.component.html',
  styleUrls: ['./my-dashboard.component.css']
})
export class MyDashboardComponent {
  /** Based on the screen size, switch from standard to one column per row */

  data:data[]=[]

  constructor(private breakpointObserver: BreakpointObserver,private http:HttpClient) {}
  ngOnInit(){
    this.http.get('https://api.spacexdata.com/v4/ships').subscribe((data:any)=>{this.data=data});
  }
}
