import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { MyValidator } from 'src/app/shared/validators/my-validator';

@Component({
  selector: 'app-hero-reactive-form',
  templateUrl: './hero-reactive-form.component.html',
  styleUrls: ['./hero-reactive-form.component.css']
})
export class HeroReactiveFormComponent  {

  // myControl = new FormControl('');
  // myObservable: Observable<string> | null = null;

  formReattivoEroe : FormGroup | null = null;

  constructor(fb: FormBuilder) {

    this.formReattivoEroe = fb.group(
      {
         nome: ['', [Validators.required, Validators.minLength(3), MyValidator]],
         potere: [],
         alterego: []
      }
    );

    // this.myObservable = this.myControl.valueChanges;
    // this.myObservable.subscribe( testo => {
    //   console.log(testo);
    //   if(testo.length > 10) {
    //     this.myControl.setValue('topolino');
    //   }
    // });
  }
  submit(): void {
    console.log(this.formReattivoEroe);
  }

  get nome(): any {
    return this.formReattivoEroe?.get('nome');
  }

}
