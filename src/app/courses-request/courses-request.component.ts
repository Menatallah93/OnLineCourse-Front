import { Component } from '@angular/core';
import { ICoursing } from '../Shared-Interfase/IConsulting';
import { CoursesServService } from '../Servise/courses-serv.service';

@Component({
  selector: 'app-courses-request',
  templateUrl: './courses-request.component.html',
  styleUrls: ['./courses-request.component.scss']
})
export class CoursesRequestComponent {
  PendingRequests:ICoursing[]=[]
  SpesificRequest:ICoursing=
  {
    name: " ",
    email: "",
    phoneNumber: "",
    description: "",
    file: ""
};
constructor(private coursServ:CoursesServService){}
ngOnInit() {
 this.coursServ.getAllPendingRequests().subscribe(
  {
    next:data=>
    {
      this.PendingRequests=data
      console.log(data)
    },
    error:err=>console.log(err)
  }
 )
}
ShowModal(item:ICoursing)
{
  this.SpesificRequest=item
}
RejectRequest(id:number=0)
{
  this.coursServ.RejectRequest(id).subscribe(
    {
      next:data=>{
        console.log(data)
        this.PendingRequests= this.PendingRequests.filter(x=>x.id!=id)
      },
      error:err=>console.log(err)
    }
  )
}
async AccptRequest(id:number=0)
{
 await this.coursServ.AcceptRequest(id).subscribe(
    {
      next:data=>{
        this.PendingRequests= this.PendingRequests.filter(x=>x.id!=id)

        console.log(data)
      },
      error:err=>console.log(err)
    }
  )
}
}
