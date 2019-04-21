import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { University } from 'src/app/models/university.model';
import { UniversityService } from 'src/app/services/university.service';
import { AccreditationTypes } from 'src/app/models/accreditation-types.model';
import { AccreditationTypesService } from 'src/app/services/accreditation-types.service';
import { Faculty } from 'src/app/models/faculty.model';
import { FacultyService } from 'src/app/services/faculty.service';
import { EducationLevel } from 'src/app/models/education-level.model';
import { EducationLevelService } from 'src/app/services/education-level.service';
import { AccreditationApplicationVM } from 'src/app/models/accreditation-application';
import { AccreditationService } from 'src/app/services/accreditation.service';
import { AccreditationApplication } from 'src/app/models/accreditation-app.model';
import { AccreditationProgrammes } from 'src/app/models/accreditation-programmes.model';
import { AuthService } from 'src/app/services/auth.service';
import { UserList } from 'src/app/models/user-list.model';
import { SemesterService } from 'src/app/services/semester.service';
import { Semester } from 'src/app/models/semester.model';
import { AccrStudyProgrammesSubjects } from 'src/app/models/accreditation-programm-subjects';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accreditation-app-create',
  templateUrl: './accreditation-app-create.component.html',
  styleUrls: ['./accreditation-app-create.component.scss']
})
export class AccreditationAppCreateComponent implements OnInit {
  accrAppFormGroup: FormGroup;
  accrSPFormGroup: FormGroup;
  accrSPSubjectsFormGroup: FormGroup;

  universities: University[];
  accrTypes: AccreditationTypes[];
  faculties: Faculty[];
  educationLevels: EducationLevel[];
  academicStaff: UserList[];
  semesters: Semester[];
  academicYears: string[];
  ects: string[];

  model = {} as AccreditationApplicationVM;

  selectedAcademicYear: string;
  selectedEcts: string;
  selectedAccrTypeId: number;
  selectedEsac: string;
  selectedEsacField: string;
  showImportButton:boolean = true;
  constructor(
    private _formBuilder: FormBuilder,
    private _accrService: AccreditationService,
    private _universityService: UniversityService,
    private _facultyService: FacultyService,
    private _accrTypesService: AccreditationTypesService,
    private _eduLevelsService: EducationLevelService,
    private _authService: AuthService,
    private _semesterService: SemesterService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getUniversities()
    this.getAccreditationTypes();
    this.getEducationLevels();
    this.getAcademicStaff();
    this.getSemesters();
    this.accrAppFormGroup = this._formBuilder.group({
      accreditationTypeId: [0, Validators.required],
      universityId: [0, Validators.required],
      academicYear: ['', Validators.required],
      applicationDate: [Date.now],
      validFromDate: [Date.now],
      validToDate: [Date.now],
      verdictId: [1],
      meetingId: [1],
    });

    this.accrSPFormGroup = this._formBuilder.group({
      programmDescription: ['', Validators.required],
      educationLevelId: [0, Validators.required],
      facultyId: [0, Validators.required],
      specialismDescription: ['', Validators.required],
      ects: ['', Validators.required],
      diplomaName: ['', Validators.required],
      studyDuration: ['', Validators.required],
      maxNumber: ['', Validators.required],
      studyType: ['', Validators.required],
      esac: ['', Validators.required],
      esacField: ['', Validators.required]
    });


    this.accrSPSubjectsFormGroup = this._formBuilder.group({
      subjects: this._formBuilder.array([this.getInitSubjects()])
    })

    this.academicYears = ['2019-2020', '2020-2021', '2021-2022', '2022-2023', '2023-2024', '2024-2025'];
    this.ects = ['60', '90', '120', '180', '240', '300', '360']
    this.selectedAcademicYear = this.academicYears[0];
  }

  getInitSubjects() {
    return this._formBuilder.group({
      professorId: ['', Validators.required],
      description: ['', Validators.required],
      semesterId: ['', Validators.required],
      exercisesNum: ['', Validators.required],
      lecturesNum: ['', Validators.required],
      creditsNum: [10, Validators.required],
      consultationNum: ['', Validators.required],
      clinicNum: ['', Validators.required],
      practiceNum: ['', Validators.required],
      researchNum: ['', Validators.required],
      subjectCode: ['', Validators.required],
    })
  }

  getUniversities() {
    this._universityService.getUniversities().subscribe(data => {
      this.universities = data;
    })
  }

  getAccreditationTypes() {
    this._accrTypesService.getAccreditationTypes().subscribe(data => {
      this.accrTypes = data;
    })
  }

  getFaculties(uniId: number) {
    this._facultyService.getFacultiesByUniversity(uniId).subscribe(data => {
      this.faculties = data;
    })
  }

  getEducationLevels() {
    this._eduLevelsService.getEducationLevels().subscribe(data => {
      this.educationLevels = data;
    })
  }

  getAcademicStaff() {
    this._authService.getAcademicStaff().subscribe(data => {
      this.academicStaff = data;
    })
  }

  getSemesters() {
    this._semesterService.getSemeters().subscribe(data => {
      this.semesters = data;
    })
  }

  onUniversityChange(event: any) {
    let target = event.currentTarget
    this.accrAppFormGroup.get('universityId').patchValue(parseInt(target.value));
    this.getFaculties(target.value);
  }

  onAcademicYearChange(event: any) {
    let target = event.currentTarget
    this.accrAppFormGroup.get('academicYear').patchValue(target.value);
  }

  onStudyTypeChange(event: any) {
    let target = event.currentTarget
    this.accrSPFormGroup.get('studyType').patchValue(target.value);
  }

  onEctsChange(event: any) {
    let target = event.currentTarget
    this.accrSPFormGroup.get('ects').patchValue(target.value);
  }

  getEsacText(event: any) {
    let target = event.currentTarget;
    this.accrSPFormGroup.get('esac').patchValue(target.value);
  }

  getEsacFieldText(event: any) {
    let target = event.currentTarget;
    this.accrSPFormGroup.get('esacField').patchValue(target.value);
  }
  addNewSubject() {
    (this.accrSPSubjectsFormGroup.controls['subjects'] as FormArray).push(this.getInitSubjects());
  }
  removeSubject(index: number) {
    // control refers to your formarray
    const control = <FormArray>this.accrSPSubjectsFormGroup.controls['subjects'];
    // remove the chosen row
    control.removeAt(index);
  }

  getSubjectsFromSems() {
    const facultyId = parseInt(this.accrSPFormGroup.get('facultyId').value);
    const educationLevelId = parseInt(this.accrSPFormGroup.get('educationLevelId').value);
    this._accrService.getSubjectsFromSems(facultyId, educationLevelId).subscribe(data => {
      console.log(data)
      this.mapSubjects(data)
    })
  }

  apply() {
    this.model.AccreditationApplication = this.accrAppFormGroup.value as AccreditationApplication;
    this.model.AccreditationStudyProgrammes = this.accrSPFormGroup.value as AccreditationProgrammes;
    this.model.AccrStudyProgrammesSubjects = this.accrSPSubjectsFormGroup.controls['subjects'].value as AccrStudyProgrammesSubjects[];
    this._accrService.applyForAccreditation(this.model).subscribe(data => {
      if (data == true) {
        this.router.navigate(['/list'])
      }
      else {
        alert(data['message']);
      }
    });
  }

  mapSubjects(data: any) {
    this.removeSubject(0);
    this.showImportButton = false;
    data.forEach(element => {
      var subject = this.getInitSubjects();
      subject.setValue({
        semesterId: element.semesterId,
        professorId: '',
        description: element.subjectName,
        exercisesNum: element.exercisesNum,
        lecturesNum: element.lecturesNum,
        creditsNum: element.creditsNum,
        consultationNum:element.consultationNum,
        clinicNum: element.clinicNum,
        practiceNum: element.practiceNum,
        researchNum: element.researchNum,
        subjectCode: element.subjectCode
      });
      (this.accrSPSubjectsFormGroup.controls['subjects'] as FormArray).push(subject);
    });
  }
}
