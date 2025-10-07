import { Component, inject, ViewEncapsulation } from '@angular/core';
import { isPlatformBrowser, DOCUMENT, CommonModule } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';
import { Card } from '../card/card';

@Component({
	selector: 'app-home',
	standalone: true,
	imports: [CommonModule, Card],
	templateUrl: './home.html'
})
export class Home {
	private document = inject(DOCUMENT);
	private platformId = inject(PLATFORM_ID);

	cards = [
		{ title: 'Ciberseguridad', description: 'Configuración básica de seguridad de un servidor en Linux.', image: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg' },
		{ title: 'Desarrollo Full Stack', description: 'Video creación de una web en Laravel', image: 'https://images.pexels.com/photos/574069/pexels-photo-574069.jpeg' },
		{ title: 'Web en Wordpress', description: 'Próximamente podrá ver mi web en Wordpress', image: 'https://upload.wikimedia.org/wikipedia/commons/d/db/Official_WordPress_Logo.png' },
		{ title: 'Web en Webflow', description: 'Echa un vistazo a mi web con WebFlow', image: 'images/desktop/webflow.png' }
	];

	constructor() {
		if (isPlatformBrowser(this.platformId)) {
			window.addEventListener('DOMContentLoaded', () => {
				const slides = this.document.querySelectorAll('#slider picture');
				if (slides.length === 0) return;

				let current = 0;
				setInterval(() => {
					slides[current].classList.remove('opacity-100');
					slides[current].classList.add('opacity-0');

					current = (current + 1) % slides.length;

					slides[current].classList.remove('opacity-0');
					slides[current].classList.add('opacity-100');
				}, 4000);

			});
		}
	}
}
