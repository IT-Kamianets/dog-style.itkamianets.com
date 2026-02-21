import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shop.html',
})
export class ShopComponent {
  shopProducts = [
    { name: 'Маска Iv San Bernard (маракуя)', description: 'Відновник структури та текстури шерсті. З протеїнами для довгої шерсті.' },
    { name: 'Лосьйон для вушок', description: 'Для щоденного догляду та чистоти.' },
    { name: 'Лосьйон від слизових доріжок', description: 'Ефективне очищення зони навколо очей.' },
    { name: 'Спрей для легкого розчісування', description: 'Полегшує догляд за шерстю та запобігає ковтунам.' },
    { name: 'Бантики', description: 'Великий вибір кольорів та фасонів для Ваших пухнастиків.' },
    { name: 'Професійні шампуні та кондиціонери', description: 'Перевірені продукти, якими ми користуємось самі.' },
    { name: 'Розчіски та гребінці', description: 'Для якісного домашнього догляду.' }
  ];
}
