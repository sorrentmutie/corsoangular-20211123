import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-form',
  templateUrl: './test-form.component.html',
  styleUrls: ['./test-form.component.css']
})
export class TestFormComponent implements OnInit {

  value: string = '';
  constructor() { }

  ngOnInit(): void {
  }

  onClickMe(payload: any){
    console.log(payload);
  }

  onKeyUp(payload:string) {
    this.value = payload;
  }

}
