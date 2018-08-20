import { AbstractControl, ValidationErrors } from '@angular/forms'

export class UsernameValidators {
    static cannotContainSpace(control: AbstractControl) : ValidationErrors | null {
        if ((control.value as string).indexOf(' ') >= 0)
            return { cannotContainSpace: true };
        
        return null;
    }

    static shouldBeUnique(control: AbstractControl) : Promise<ValidationErrors | null> {
        return new Promise((resolve, reject) => {//Three arrow function resolve return value
                                                 //reject ?: void
                                                 //(resolve, reject) => void
            setTimeout(() => { //setTimetout is an asyncronus operatrion
                if (control.value === 'rajendra')
                    resolve({ shouldBeUnique: true }); //instend of return we use Promise functions resolve
                else // should not exit from codition
                    resolve(null);
            }, 2000);
        });

    }
}