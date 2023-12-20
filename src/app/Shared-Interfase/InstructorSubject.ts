export interface InstructorSubject{
    instructorId: string,
    subjectId: number,
    subjectName:string,
    appointmentsDTOs: Appointment[]
}

export interface Appointment{
    lectureDate: Date,
    dayOfWeek : number,
}