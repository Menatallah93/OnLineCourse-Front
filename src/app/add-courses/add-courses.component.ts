import { ChangeDetectorRef, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';
import * as bootstrap from 'bootstrap';
import { ElementRef } from '@angular/core';


@Component({
  selector: 'app-add-courses',
  templateUrl: './add-courses.component.html',
  styleUrls: ['./add-courses.component.scss']
})

export class AddCoursesComponent {
  //@ViewChild('exampleCalsultModal') exampleCalsultModal!: ElementRef;
  
  myForm!: FormGroup;
  fullData!:FormGroup
  

  constructor(private fb: FormBuilder , private cdr: ChangeDetectorRef ) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      rows: this.fb.array([this.createRow])
    });

    this.fullData = this.fb.group({
      subjects: this.fb.array([this.createCard])
    })

    setTimeout(() => {
      this.hideModal();
    }, 5000);
  }

  hideModal() {
   //const modal: any = new bootstrap.Modal(this.exampleCalsultModal.nativeElement);
   //modal.hide();
  }

  get rowsArray() {
    return this.myForm.get('rows') as FormArray;
  }

  get cardArray(){
    return this.fullData.get('subjects') as FormArray;
  }
  

  createRow(): FormGroup {
    return this.fb.group({
      day: new FormControl(''),
      time: new FormControl('')
    });
  }
  createCard():FormGroup{
    return this.fb.group({
      subject: new FormControl(''),
      grade: new FormControl(''),
      myform: this.myForm
    })
  }


  addRow() {
    this.rowsArray.push(this.createRow());
    this.cdr.detectChanges();
  }

  addCard() {
    this.cardArray.push(this.createCard());
    this.cdr.detectChanges();
  }

}

function ViewChild(arg0: string): (target: AddCoursesComponent, propertyKey: "exampleCalsultModal") => void {
  throw new Error('Function not implemented.');
}
