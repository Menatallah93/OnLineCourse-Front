import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MaterialService } from '../Servise/material.service';
import { TutorialType, UploadTutorialModel } from '../Shared-Interfase/IConsulting';
import { AuthorizeService } from '../Servise/authorize.service';
import { UploadImageService } from '../Servise/upload-image.service';
import { IStudentTotorial, tutorialDatas } from '../Shared-Interfase/IUserRegister';
import { StudentService } from '../Servise/student.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {
  displayedCourses: IStudentTotorial[]=[];
  tutorialDatas: tutorialDatas[]=[];

  coursesPerPage = 4;
  currentPage = 1;
  totalPages: number = 0;

  getStudentTutorials() {
    const studentId = this.auth.getTokenID(); // Replace with the actual student ID
    this.student.GetStudentTatourial(studentId)
      .subscribe(
        (data: IStudentTotorial[]) => {
          this.displayedCourses = data;
          console.log(this.displayedCourses);
          // this.calculateTotalPages();
          // this.displayCourses();
        },
        error => {
          console.error('Error fetching student tutorials:', error);
        }
      );
  }



  ngOnInit(): void {
    this.getStudentTutorials();


  }

  calculateTotalPages(): void {
    this.totalPages = Math.ceil(this.displayedCourses.length / this.coursesPerPage);
  }

  displayCourses(): void {
    debugger
    const startIndex = (this.currentPage - 1) * this.coursesPerPage;
    const endIndex = startIndex + this.coursesPerPage;
    this.displayedCourses = this.displayedCourses.slice(startIndex, endIndex);
  }

  onPageChange(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.displayCourses();
    }
  }

  totalPagesArray(): number[] {
    return Array(this.totalPages).fill(0).map((_, index) => index + 1);
  }



  uploadModel: UploadTutorialModel = {
    studentId: '',
    instructorId: '',
    subjcetId: 0,
    tutorial: [
      {
        subjectTutorial: '',
        tutorialType: TutorialType.Video
      }
    ],
    tutorialName: ''
  };
  imagePath: string = "";
  selectedFile!: File;

  constructor(private serv: MaterialService, private auth: AuthorizeService, private imageserv: UploadImageService,private student:StudentService) { }
  instructorId: string = this.auth.getTokenID();
  studentId: string = '2755130b-2868-444e-b407-93ae4b6dfaaf';
  subjcetId: number = 1;
  onFileChange(event: any, type: string) {
    this.selectedFile = event.target.files[0];

    if (this.selectedFile) {
      const formData = new FormData();
      formData.append('file', this.selectedFile);

      this.imageserv.UploadImage(formData).subscribe({
        next: (data: any) => {
          console.log(data);
          this.imagePath = data.pathImage;
          console.log(this.imagePath);

          this.uploadModel.tutorial[0].subjectTutorial = this.imagePath;
        },
        error: (error) => {
          console.error('Upload failed:', error);
        }
      });
    }
  }
  itemList: any[] = [];

  addItem() {
    this.itemList.push({});
    this.uploadModel.tutorial.push({
      subjectTutorial: '',
      tutorialType: TutorialType.PDF
    });

  }

  saveChanges() {
    this.uploadModel.studentId = this.studentId;
    this.uploadModel.instructorId = this.instructorId;
    this.uploadModel.subjcetId = this.subjcetId;



    this.serv.addmaterial(this.uploadModel).subscribe(
      (response) => {
        console.log('Upload successful:', response);
      },
      (error) => {
        console.error('Upload failed:', error);
      }
    );
  }
}
