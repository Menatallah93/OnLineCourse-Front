export interface InstructorSubject {
  instructorId: string;
  subjectId?: number;
  subjectName: string;
  appoinstmentDTOs: Appointment[];
}

export interface Appointment {
  lectureDate: string;
  dayOfWeek: number;
}
export interface IStudentRequestForInstructor {
  requestId: number;
  studentName: string;
  grade: string;
  subjectName: string;
  lectureDate: string;
  dayOfWeek: number;
}

// export interface IInstructor {
//   name: string;
//   phone: string;
//   email: string;
//   id: string;
//   subjects: string[];
// }
