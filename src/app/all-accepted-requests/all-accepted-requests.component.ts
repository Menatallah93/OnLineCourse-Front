import { Component } from '@angular/core';
import { InstructorService } from '../Servise/instructor.service';
import { IInstructor } from '../Shared-Interfase/IUserRegister';

@Component({
  selector: 'app-all-accepted-requests',
  templateUrl: './all-accepted-requests.component.html',
  styleUrls: ['./all-accepted-requests.component.scss']
})
export class AllAcceptedRequestsComponent {
  instructors:IInstructor[]=[];
  buttonClicked: boolean = false;

constructor(private serv:InstructorService)
{

}
ngOnInit(): void {
 this.serv.GetAllAccepted().subscribe(
  {
    next:data=>
    {
      this.instructors=data;
      console.log(data);
    },
    error:err=>console.log(err)
  }
 ) 
}
RejectedRequest(id:string="")
{
  this.serv.Rejected(id).subscribe(
    {
      next:data=>
      {
        this.instructors=this.instructors.filter(x=>x.id!=id)

        console.log(data);
      },
      error:err=>console.log(err)
    }
   ) 
}
}
