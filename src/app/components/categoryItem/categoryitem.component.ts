import { Component, Input } from '@angular/core'

interface Category {
    name: string;
    description: string;
    image: string;
}

@Component({
    selector: 'app-category-item',
    styleUrls: ['./categoryitem.component.scss'],
    templateUrl: './categoryitem.component.html'
})

export class CategoryItemComponent {
    @Input() category: Category = { name: '', description: '', image: ''}
}