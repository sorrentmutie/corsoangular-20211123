import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounce, debounceTime, filter } from 'rxjs/operators';

@Component({
  selector: 'app-test-form',
  templateUrl: './test-form.component.html',
  styleUrls: ['./test-form.component.css']
})
export class TestFormComponent implements OnInit {

  value: string = '';
  myInput: FormControl | null = null;

  constructor() {
    this.myInput = new FormControl('');
    this.myInput.valueChanges.pipe(
      filter((testo: string) => testo.length > 4),
      debounceTime(1000)
    )
    .subscribe(
      testo => {
        console.log(testo);
      }
    );
  }

  ngOnInit(): void {
  }

  onClickMe(payload: any){
    console.log(payload);
  }

  onKeyUp(payload:string) {
    this.value = payload;
  }

}
