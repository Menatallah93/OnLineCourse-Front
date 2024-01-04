import { Component } from '@angular/core';
import { IConsulting } from '../Shared-Interfase/IConsulting';
import { ConsultingService } from '../Servise/consulting.service';

@Component({
  selector: 'app-consulting-request',
  templateUrl: './consulting-request.component.html',
  styleUrls: ['./consulting-request.component.scss']
})
export class ConsultingRequestComponent {

    PendingRequests:IConsulting[]=[]
    SpesificRequest:IConsulting=
    {
      name: " ",
      email: "",
      phoneNumber: "",
      description: "",
      file: "",
      consultingHoures:""
  };
  constructor(private Serv:ConsultingService){}
  ngOnInit() {
   this.Serv.getAllPendingRequests().subscribe(
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
  ShowModal(item:IConsulting)
  {
    this.SpesificRequest=item
  }
  RejectRequest(id:number=0)
  {
    this.Serv.RejectRequest(id).subscribe(
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
   await this.Serv.AcceptRequest(id).subscribe(
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
  
