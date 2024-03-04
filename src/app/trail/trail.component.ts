import { Component } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-trail',
  templateUrl: './trail.component.html',
  styleUrls: ['./trail.component.scss'],
})
export class TrailComponent {
  isLinear = false;
  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;
  constructor(private _formBuilder: FormBuilder) {}
  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
    });
  }
  currentStep = 1;
  numSteps = 4;

  nextStep() {
    this.currentStep++;
    if (this.currentStep > this.numSteps) {
      this.currentStep = 1;
    }
    var stepper = document.getElementById("stepper1");
    if(stepper){
    var steps = stepper.getElementsByClassName("step");
    console.log("stepper: ",stepper)
console.log("steps: ",steps)
    Array.from(steps).forEach((step, index) => {
      let stepNum = index + 1;
      if (stepNum === this.currentStep) {
        this.addClass(step, "editing");
      } else {
        this.removeClass(step, "editing");
      }
      if (stepNum < this.currentStep) {
        this.addClass(step, "done");
      } else {
        this.removeClass(step, "done");
      }
    });
  }
  }
  hasClass(elem:any, className:any) {
    return new RegExp(" " + className + " ").test(" " + elem.className + " ");
  }

  addClass(elem:any, className:any) {
    if (!this.hasClass(elem, className)) {
      elem.className += " " + className;
      console.log("add: ",elem.className)
    }
  }

  removeClass(elem:any, className:any) {
    console.log("rep: ",elem.className)
    var newClass = " " + elem.className.replace(/[\t\r\n]/g, " ") + " ";
    console.log("newClass: ",newClass)
    if (this.hasClass(elem, className)) {
      console.log("bool "+elem.className +": ",+this.hasClass(elem, className))
      while (newClass.indexOf(" " + className + " ") >= 0) {
        console.log("Index of editing: ",newClass.indexOf(" " + className + " "))
        newClass = newClass.replace(" " + className + " ", " ");
        console.log("next newClass: ",newClass)
      }
      elem.className = newClass.replace(/^\s+|\s+$/g, "");
      console.log("final change: ",elem.className)
    }
  }
}
