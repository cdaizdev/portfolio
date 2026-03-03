import { Component, inject, ViewEncapsulation } from '@angular/core';
import { isPlatformBrowser, DOCUMENT } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';
import { Card } from '../../components/ui/card/card';

@Component({
	selector: 'app-home',
	standalone: true,
	imports: [Card],
	templateUrl: './home.html'
})
export class Home {
	private document = inject(DOCUMENT);
	private platformId = inject(PLATFORM_ID);

	public cards = [
		{
			title: 'Usar Hyper-V para desarrollo',
			type: 'Desarrollo',
			route: '/use_hyperv_in_environment',
			description: 'Existen muchas opciones para crear un entorno de desarrollo y levantarlo rápidamente. Pero quizá te gustaría tener un entorno más estable, aislado y fácil de replicar sin depender de servicios externos o descargar archivos de configuración de dudosa procedencia (como Vagrant). Ahí es donde Hyper‑V se convierte en una herramienta muy potente: te permite crear máquinas virtuales ligeras, configurarlas a tu gusto y disponer de un entorno de desarrollo limpio siempre que lo necesites', 
			image: 'images/desktop/hyperv.png',
			dateOfPublication: '5 Feb 2026',
			time: '4 min'
		},
		{
			title: 'Docker y Kubernetes',
			type: 'Desarrollo',
			route: '/docker_development',
			description: 'Docker se ha convertido en una pieza clave del desarrollo moderno, permitiendo crear, desplegar y ejecutar aplicaciones de forma rápida, consistente y aislada. En este blog exploraremos por qué Docker y Kubernetes es una excelente opción para el desarrollo.',
			image: 'images/desktop/docker.png',
			dateOfPublication: '12 Feb 2026',
			time: '2 min'
		}
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
