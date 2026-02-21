import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
})
export class HomeComponent {
  dogPrices = [
    { breed: "Йоркширський тер'єр", weight: '2-2,5 кг', price: '600-700' },
    { breed: 'Мальтійська болонка', weight: '2-2,5 кг', price: '600-700' },
    { breed: 'Мальтіпу', weight: '2,5-3 кг', price: '700-800' },
    { breed: 'Ши-тцу', weight: '2,5-3 кг', price: '650-800' },
    { breed: 'Шпіц', weight: '2-3 кг', price: '650-800' },
    { breed: 'Бішон фрізе', weight: '3-3,5 кг', price: '650-800' },
    { breed: 'Той-пудель', weight: '3-3,5 кг', price: '650-800' },
    { breed: 'Французький бульдог', weight: '2 кг', price: '550-650' },
    { breed: 'Мопс', weight: '2 кг', price: '550-650' },
    { breed: 'Пекінес', weight: '2-2,5 кг', price: '650-750' },
    { breed: 'Чіхуа-хуа', weight: '2 кг', price: '600-650' }
  ];

  mediumBreeds = [
    { breed: 'Спанієль спортивна', weight: '2-2,5 кг', price: '800' },
    { breed: 'Спанієль породна', weight: '2,5-3,5 кг', price: '900' },
    { breed: 'Коргі', weight: '2-2,5 кг', price: '800-950' },
    { breed: 'Кавалер кінг', weight: '2-2,5 кг', price: '900' }
  ];

  largeBreeds = [
    { breed: 'Самоїдська лайка', weight: '3-3,5 кг', price: '1100-1500' },
    { breed: 'Хаскі', weight: '2,5-3 кг', price: '900-1100' },
    { breed: 'Акіта', weight: '2,5-3 кг', price: '900-1200' },
    { breed: 'Чау-чау', weight: '3-3,5 кг', price: '1300-1500' },
    { breed: 'Вівчарка', weight: '2-2,5 кг', price: '1000-1200' }
  ];

  catPrices = [
    { service: 'Стрижка кота «Лев» без купання', price: '550-650' },
    { service: 'Стрижка з купанням', price: '+150 до основної ціни' },
    { service: 'Експрес-линька без купання', price: '600-650' },
    { service: 'Експрес-линька з купанням', price: '+150 до основної ціни' }
  ];

  additionalServices = [
    { name: 'Підрізання кігтів для великих порід (+заточка)', price: '100' },
    { name: 'Підрізання кігтів для малих та середніх порід (+заточка)', price: '60' },
    { name: 'Підрізання кігтів для котиків', price: '35' }
  ];

  serviceFeatures = [
    'Стрижки великих, середніх та малих порід.',
    'Стрижка котиків та вичісування.',
    'Купання та сушка.',
    'Стрижка (гігієнічна, модельна, по породі).',
    'Підрізання кігтів.',
    'Чистка вух та промивання очей.',
    'SPA догляд.',
    'Видалення ковтунів.',
    'Експрес-линька.',
    'Ніякого наркозу чи седативних препаратів.',
    'Сертифікований майстер.',
    'Завжди стерильні інструменти, стіл, ванна та приміщення.'
  ];

  serviceTerms = [
    'Агресивних тварин на процедури не беремо',
    'Наявність бліх та паразитів не припустимо',
    'Тварина має стояти на обліку у ветеринара та проходити щорічну вакцинацію'
  ];

  gallery = [
    '/image/1.jpg', '/image/2.jpg', '/image/3.jpg', '/image/4.jpg', '/image/5.jpg',
    '/image/6.jpg', '/image/7.jpg', '/image/8.jpg', '/image/9.jpg', '/image/10.jpg'
  ];
}
