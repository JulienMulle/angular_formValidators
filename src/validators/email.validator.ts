import { AbstractControl, ValidationErrors } from "@angular/forms";

export function emailValidator(control: AbstractControl): ValidationErrors | null{
    const emailRegex = RegExp(/^[a-z]{1,10}[^\s\da-zA-Z][a-z]{1,10}[^\s\da-zA-Z][a-z]{1,5}$/g);
    const valid = emailRegex.test(control.value);
    const errors = {
        email: {
            rules: `NOPE .... go apprendre à tapé un mail peon !`
        }
    }
    return !valid ? errors : null;
}