import { AccreditationApplication } from "./accreditation-app.model";
import { AccreditationProgrammes } from "./accreditation-programmes.model";
import { AccrStudyProgrammesSubjects } from "./accreditation-programm-subjects";

export class AccreditationApplicationVM {
    AccreditationApplication:AccreditationApplication;
    AccreditationStudyProgrammes:AccreditationProgrammes;
    AccrStudyProgrammesSubjects:AccrStudyProgrammesSubjects[];

}