export interface InstructorSubject{
    instructorId: string,
    subjectId?: number,
    subjectName:string,
    appoinstmentDTOs: Appointment[]
}

export interface Appointment{
    lectureDate: string,
    dayOfWeek : number,
}