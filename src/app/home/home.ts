import { Component, inject, ViewEncapsulation } from '@angular/core';
import { isPlatformBrowser, DOCUMENT } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';
import { Card } from '../card/card';

@Component({
	selector: 'app-home',
	standalone: true,
	imports: [],
	templateUrl: './home.html'
})
export class Home {
	private document = inject(DOCUMENT);
	private platformId = inject(PLATFORM_ID);

	cards = [
		{ title: 'Desarrollo Full Stack', description: 'Video creación de una web en Laravel', image: 'https://images.pexels.com/photos/574069/pexels-photo-574069.jpeg', time: '4min' },
		{ title: 'Blog', route: '/blog', description: 'En desarrollo', image: '', time:'infinity' }
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
