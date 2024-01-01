export interface IRequestAppointmentDTO{
    id?:number,
    requestId:number,
    studentName: string,
    studentPhoneNumber :string,
    studentEmail :string,
    grade :string,
    numberOfHouers :number,
    status :string,
    instructorName :string,
}