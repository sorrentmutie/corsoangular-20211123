import { Component, OnInit } from '@angular/core';
import { Hero } from '../../models/hero';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent  {
  modello = new Hero(1, 'Dr.Salvatore', 'Magia', 'Salvatore Sorrentino');
  powers = ['Forza','Genio', 'Magia'];
}
