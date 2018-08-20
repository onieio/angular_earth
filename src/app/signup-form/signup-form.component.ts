import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsernameValidators } from './username.validators'

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {
  // In reactive forms everthing is passing by object Ie.,
  // we created the object for FormGroup and FormControl. 
  form = new FormGroup({
    account: new FormGroup({
      username: new FormControl('', Validators.required, UsernameValidators.shouldBeUnique // Calling custom validator from username.validators.ts
      ), 
      password: new FormControl('',Validators.required)
    })
  });

  login() {
    this.form.setErrors({
        inValidLogin: true
    });
  }

  get username(){
    return this.form.get('account.username'); // This returns a username to html template
                                              // After keeping the entire form (ie., account) in single form we need to return username with
                                              // accoun.username
  }
}
