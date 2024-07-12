import {Component} from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";


@Component({
  selector: "create-course-step-2",
  templateUrl:"create-course-step-2.component.html",
  styleUrls: ["create-course-step-2.component.scss"]
})
export class CreateCourseStep2Component {
  isSubmitted = false;

  // City Names
  City: any = ['Florida', 'South Dakota', 'Tennessee', 'Michigan']

  constructor(public fb: FormBuilder) { }

  /*########### Form ###########*/
  registrationForm = this.fb.group({
    cityName: ['', [Validators.required]]
  })


  // Choose city using select dropdown
  changeCity(e) {
    console.log(e.value)
    this.cityName.setValue(e.target.value, {
      onlySelf: true
    })
  }

  // Getter method to access formcontrols
  get cityName() {
    return this.registrationForm.get('cityName');
  }

  /*########### Template Driven Form ###########*/
  onSubmit() {
    this.isSubmitted = true;
    if (!this.registrationForm.valid) {
      return false;
    } else {
      alert(JSON.stringify(this.registrationForm.value))
    }

  }
}
