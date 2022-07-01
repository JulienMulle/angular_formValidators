import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { emailValidator } from 'src/validators/email.validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  usermail:string|null|undefined = "";

  emailValidation = this.formBuilder.group(
    {
      email:['',emailValidator]
    }
  )

  constructor(private formBuilder: FormBuilder){}

  onSubmit(): void{
    this.usermail = this.emailValidation.get('email')?.value
    console.log(this.usermail)
  }

}
