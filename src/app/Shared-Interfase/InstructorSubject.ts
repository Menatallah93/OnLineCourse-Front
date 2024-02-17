export interface InstructorSubject {
  instructorId: string;
  subjectId?: number;
  subjectName: string;
  appoinstmentDTOs: Appointment[];
}

export interface Appointment {
  id?:number;
  lectureDate: string;
  dayOfWeek: number;
  isEditing?: boolean;
  isUpdated?: boolean;
}
export interface IStudentRequestForInstructor {
  requestId: number;
  studentName: string;
  studentId?: string;
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
