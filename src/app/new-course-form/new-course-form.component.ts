import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'new-course-form',
  templateUrl: './new-course-form.component.html',
  styleUrls: ['./new-course-form.component.css']
})
export class NewCourseFormComponent {
  form = new FormGroup({
    topics: new FormArray([])
  });

  addTopic(topic: HTMLInputElement) { //passing http input element
    this.topics.push(new FormControl(topic.value));
    topic.value = '';
  }

  removeTopic(topic: FormControl) { // Since we are taking a topics from the user we use FormControl
    let index = this.topics.controls.indexOf(topic);
    this.topics.removeAt(index); 
  }

  get topics() {
    return this.form.get('topics') as FormArray;
  }
}

/*
constructor(fb: FormBuilder){
  this.form = fb.group({
    name:['',Validators.required],
    contact: fb.group({
      email: [],
      phome: []
    }),
    topics: fb.array([])
  });
}

*/