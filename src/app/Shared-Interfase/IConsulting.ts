export interface IConsulting{

    id?:number,
    name: string,
    email :string,
    phoneNumber :string,
    description :string,
    consultingHoures:string,
    file:string
}
export interface ICoursing{

    id?:number,
    name: string,
    email :string,
    phoneNumber :string,
    description :string,
    file:string
}
export interface UploadTutorialModel {
  studentId: string;
  instructorId: string;
  subjcetId: number;
  tutorial: TutorialData[];
  tutorialName: string;
}

export interface TutorialData {
  subjectTutorial: string;
  tutorialType: TutorialType;
}


export enum TutorialType {
  Video = 1,
  PDF = 2,
  Photo = 4,
}
