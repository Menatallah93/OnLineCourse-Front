import { Component } from '@angular/core';

@Component({
  selector: 'app-instuctor-home-page',
  templateUrl: './instuctor-home-page.component.html',
  styleUrls: ['./instuctor-home-page.component.scss']
})
export class InstuctorHomePageComponent {
  navlink:string = "request"

navigate(link:string){
  this.navlink = link ;
}
}
