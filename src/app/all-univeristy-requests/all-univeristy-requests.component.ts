import { Component } from '@angular/core';
import { UniveristyServicesService } from '../Servise/univeristy-services.service';
import { ICoursing } from '../Shared-Interfase/IConsulting';
import { IAllUniveristyStudentRequest } from '../Shared-Interfase/Student';

@Component({
  selector: 'app-all-univeristy-requests',
  templateUrl: './all-univeristy-requests.component.html',
  styleUrls: ['./all-univeristy-requests.component.scss']
})
export class AllUniveristyRequestsComponent {
  PendingRequests:IAllUniveristyStudentRequest[]=[]
  SpesificRequest:IAllUniveristyStudentRequest=
  {
    studentId:"",
    studentName:"",
    phone:"",
    univeristyRequest:
    {
      id:0,
      name:"",
      studentID:"",
      description:"",
      file:""
},}
constructor(private Serv:UniveristyServicesService){}
ngOnInit() {
 this.Serv.GetUniveristyRequest().subscribe(
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
ShowModal(item:IAllUniveristyStudentRequest)
{
  this.SpesificRequest=item
}
RejectRequest(id:number=0)
{
  this.Serv.RejectRequest(id).subscribe(
    {
      next:data=>{
        console.log(data)
        this.PendingRequests= this.PendingRequests.filter(x=>x.univeristyRequest.id!=id)
      },
      error:err=>console.log(err)
    }
  )
}
async AccptRequest(id:number=0)
{
 await this.Serv.AcceptRequest(id).subscribe(
    {
      next:data=>{
        this.PendingRequests= this.PendingRequests.filter(x=>x.univeristyRequest.id!=id)

        console.log(data)
      },
      error:err=>console.log(err)
    }
  )
}
}
