import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-academy',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './academy.html',
})
export class AcademyComponent {
  trainingFeatures = [
    'навчання з нуля',
    'багато практики на моделях',
    'індивідуальний підхід',
    'підтримка після навчання',
    'сертифікат по завершенню курсу'
  ];
}
