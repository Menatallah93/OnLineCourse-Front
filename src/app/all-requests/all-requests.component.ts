import { Component } from '@angular/core';
import { InstructorService } from '../Servise/instructor.service';
import { IInstructor } from '../Shared-Interfase/IUserRegister';

@Component({
  selector: 'app-all-requests',
  templateUrl: './all-requests.component.html',
  styleUrls: ['./all-requests.component.scss']
})
export class AllRequestsComponent {
  instructors:IInstructor[]=[];
  buttonClicked: boolean = false;

constructor(private serv:InstructorService)
{

}
ngOnInit(): void {
 this.serv.GetAllPending().subscribe(
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
AcceptedRequest(id:string="")
{
  this.serv.Accept(id).subscribe(
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
