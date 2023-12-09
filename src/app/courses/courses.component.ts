import { Component } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {
  courses = [
    { id: 1, title: 'الدرس الاول : الكيمياء ' },
    { id: 2, title: 'الدرس الثاني : الذرة' },
    { id: 3, title: 'الدرس الثالث :التركيب الكيميائي للذرة' },
    { id: 4, title: 'الدرس الرابع :التوزيع الالكتروني للذرة' },
    { id: 5, title: 'الدرس الخامس : الجدول الدوري الحديث' },
    { id: 6, title: 'الدرس السادس : اي شي ' },
    { id: 7, title: 'الدرس السابع : اي شي ' },
    { id: 8, title: 'الدرس الثامن : اي شي ' },
  ];

  coursesPerPage = 4;
  currentPage = 1;
  totalPages: number = 0;

  displayedCourses: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.calculateTotalPages();
    this.displayCourses();
  }

  calculateTotalPages(): void {
    this.totalPages = Math.ceil(this.courses.length / this.coursesPerPage);
  }

  displayCourses(): void {
    const startIndex = (this.currentPage - 1) * this.coursesPerPage;
    const endIndex = startIndex + this.coursesPerPage;
    this.displayedCourses = this.courses.slice(startIndex, endIndex);
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
}
