export interface ISubject{
    id?:number,
    name: string,
    grade:any
}

export interface StudentLibraryDTO {
  instructorName: string;
  instructorId: string;
  subjects: SubjectDTOLiberary[];
}


export interface SubjectDTOLiberary {
  id: number;
  subjectName: string;
  numberOfHours: number;
}
