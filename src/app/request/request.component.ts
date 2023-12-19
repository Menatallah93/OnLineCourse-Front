import { Component, OnInit } from '@angular/core';
import { InstuctorHomePageComponent } from '../instuctor-home-page/instuctor-home-page.component';
import { AuthorizeService } from '../Servise/authorize.service';
import { InstructorService } from '../Servise/instructor.service';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss']
})
export class RequestComponent implements OnInit {
  status:number = 0;
  instructorID: string = "";

constructor(private auth:AuthorizeService, private instr: InstructorService){}

  ngOnInit(): void {
    this.instructorID = this.auth.getTokenID();
    console.log(this.instructorID);
    this.instr.getInstructorByID(this.instructorID).subscribe((info) =>{
    console.log(info);
    if(info.status === 0){
      this.status = 0;
    }
    else if(info.status === 1 ){
      this.status = 1;
    }
    else{
      this.status = 2
    }
  })
  }


}
