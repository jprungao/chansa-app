import { Component } from '@angular/core'

@Component({
    selector: 'app-categories',
    templateUrl: './categories.component.html',
    styleUrls: ['./categories.component.scss']
})

export class CategoriesComponent {
    categories = [
        {
            name: 'Local Sports',
            description: 'All things local sport games',
            image: '/assets/localsports.jpg'
        },
        {
            name: 'E-Sports',
            description: 'All things Esport games',
            image: '/assets/esports.jpg'
        }
    ]
}