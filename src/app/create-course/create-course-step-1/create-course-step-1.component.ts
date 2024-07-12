import { NgModule } from "@angular/core";
import {Component} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';



@Component({
  selector: "create-course-step-1",
  templateUrl:"create-course-step-1.component.html",
  styleUrls: ["create-course-step-1.component.scss"]
})
export class CreateCourseStep1Component {
  myForm: FormGroup;


  ngOnInit() {
  this.myForm = this.fb.group({
    title: ['', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(60)
    ]],
    releasedAt: [new Date(), Validators.required],
    category: ['BEGINNER', Validators.required],
    courseType: ['premium', Validators.required],
    downloadsAllowed: [false, Validators.requiredTrue],
    longDescription: ['', [Validators.required, Validators.minLength(3)]]
  });

}

  constructor(private fb: FormBuilder) {

  }

  get courseTitle() {
    return this.myForm.controls['title'];
  }

}
