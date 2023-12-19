import { Component, OnInit } from '@angular/core';
import { InstuctorHomePageComponent } from '../instuctor-home-page/instuctor-home-page.component';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss']
})
export class RequestComponent implements OnInit {
  status:number = 0;
constructor(private inst : InstuctorHomePageComponent){}

  ngOnInit(): void {
    console.log(this.inst.statusFlag);
    
    if(this.inst.statusFlag == 0){
      this.status = 0;
    }
    else if(this.inst.statusFlag == 1 ){
      this.status = 1;
    }
    else{
      this.status = 2
    }
  }


}
