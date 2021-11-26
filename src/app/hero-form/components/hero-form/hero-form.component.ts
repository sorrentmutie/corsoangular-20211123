import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Hero } from '../../models/hero';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent  {
  modello = new Hero(1, 'Dr.Salvatore', 'Magia', 'Salvatore Sorrentino');
  powers = ['Forza','Genio', 'Magia'];

  onSubmit(): void {
    console.log(this.modello);
    this.router.navigate(['/randomuser']);
  }
  reset(): void {
    this.modello = new Hero(2, '','');
  }

  constructor(private router: Router){

  }


}
