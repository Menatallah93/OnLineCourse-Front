import { Component } from '@angular/core';
import { ISubject } from '../Shared-Interfase/ISubject';
import { SubjectService } from '../Servise/subject.service';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.scss']
})
export class SubjectsComponent {
  subjects:ISubject[]=[]
  constructor(private serv:SubjectService)
  {

  }
  ngOnInit(): void {
  this.serv.GetAll().subscribe(
    {
      next:data=>{
          this.subjects=data
      },
      error:err=>console.log(err)
    }
  )
  }
  DeleteSubject(id: number = 0) {
    this.serv.Delete(id).subscribe
     (
        () => {

          console.log('Before deletion:', this.subjects);
          this.subjects = this.subjects.filter((sub) => sub.id !== id);
          console.log('After deletion:', this.subjects);
        },
        (error) => {
          console.error('Error deleting Subject:', error);

        }
      );
  }
  

}
