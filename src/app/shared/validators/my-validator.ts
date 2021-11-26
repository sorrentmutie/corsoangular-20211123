import { AbstractControl } from "@angular/forms";

export function MyValidator(control: AbstractControl) {
   const value = control.value as string;

   if(!value.startsWith('s')){
    return { myValidator: true};
   }
   return null;
}
