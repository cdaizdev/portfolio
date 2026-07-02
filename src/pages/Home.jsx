import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { ExternalLink, Globe, LockKeyhole, KeyRound } from 'lucide-react';
import PreLogin from './PreLogin';

function Home() {
	const cards = [
		{
			title: "Security By Design",
			desc: "Pattern BFF (Backend For Frontend) Implementation. JWT tokens are managed safely in a SpringBoot Gateway, protecting clients against XSS attacks with HTTP-ONLY cookies."
		},
		{
			title: "Separation of Concerns",
			desc: "Complete decoupling between layers. The Frontend focuses solely on the user interface, the Gateway handles routing and security, and microservices manage pure business logic."
		},
		{
			title: "Threat Assessment",
			desc: "Centralized access control powered by Keycloak (OAuth2/OIDC). Proactive risk mitigation against identity theft and client-side credential leaks."
		},
		{
			title: "Observability and Monitoring Capabilities",
			desc: "Architecture built for traceability. Centralizing requests through Spring Cloud Gateway enables auditing traffic flows and API response times."
		},
		{
			title: "Modularity and Version Control",
			desc: "Clean and independent structure. Each REST API operates as a self-contained module, enabling seamless scaling, maintenance, and continuous deployment without impacting the ecosystem."
		}
	];

	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		const timer = setInterval(() => {
			setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
		}, 5000);

		return () => clearInterval(timer);
	}, [cards.length]);

	return (
		<div className="min-h-screen bg-slate-900 text-slate-100 font-sans antialiased">
			{/* 2. HERO SECTION */}
			<section className="relative overflow-hidden pt-20 pb-16 lg:pt-32 lg:pb-24">
				{/* CONTENEDOR PADRE DEL HERO */}
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">

						{/* SECCIÓN 1: EL TEXTO (Añade flex-1 y w-full) */}
						<div className="w-full lg:flex-1 text-center lg:text-left">
							<span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-4">
								BFF Pattern & Secure Architecture
							</span>
							<h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
								Robust Authentication with <br />
								<span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
									SecuredAuth
								</span>
							</h1>
							<p className="mt-4 text-base text-slate-400 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
								A microservice architecture protected by Keycloak and Spring Cloud. Encrypted HTTP-Only cookies and hardened sessions to prevent XSS attacks.
							</p>
							<div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
								<Link to="demo" className="btn-primary p-4">
									Explore Dashboard
								</Link>
								<a href="https://github.com/cdaizdev/Microservices.git" target="_blank" rel="noreferrer" className="flex justify-center gap-4 btn-secondary">
									View on GitHub <ExternalLink className='sm' />
								</a>
							</div>
						</div>

						{/* SECCIÓN 2: EL CARRUSEL DE CARDS (Añade flex-1 y w-full) */}
						<div className="w-full lg:flex-1 relative flex flex-col items-center">
							<div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/10 to-cyan-500/10 rounded-2xl blur-2xl opacity-50"></div>
							<div className="relative w-full max-w-xl overflow-hidden rounded-2xl border border-slate-800 bg-slate-950/60 p-1 shadow-2xl backdrop-blur-sm">
								<div className="flex transition-transform duration-700 ease-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
									{cards.map((card, index) => (
										<div key={index} className="w-full flex-shrink-0 p-8 flex flex-col justify-center min-h-[240px] sm:min-h-[280px]">
											<div className="flex items-center justify-between mb-4">
												<span className="text-xs font-mono tracking-widest text-emerald-400 uppercase">
													Principle 0{index + 1}
												</span>
												<div className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse"></div>
											</div>
											<h3 className="text-2xl font-bold text-white tracking-tight mb-3">
												{card.title}
											</h3>
											<p className="text-slate-400 text-sm leading-relaxed">
												{card.desc}
											</p>
										</div>
									))}
								</div>
								<div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
									{cards.map((_, index) => (
										<button key={index} onClick={() => setCurrentIndex(index)}
											className={`h-1.5 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-emerald-500 w-6' : 'bg-slate-700 w-2'}`}
											aria-label={`Ver tarjeta ${index + 1}`} />
									))}
								</div>

							</div>
						</div>
					</div>
				</div>
			</section>

			{/* 3. CARACTERÍSTICAS (FEATURES) */}
			<section id="features" className="flex items-center py-16 bg-slate-950/50 border-t border-slate-800 min-h-[600px]">
				<article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center max-w-3xl mx-auto mb-16">
						<h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
							Corporate-level security
						</h2>
						<p className="mt-4 text-lg text-slate-400">
							Designed following OWASP best practices for frontend session management.						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						{/* Tarjeta 1 */}
						<div className="bg-slate-900 p-6 rounded-xl border border-slate-800/80 hover:border-slate-700 transition">
							<div className="h-10 w-10 bg-emerald-500/10 text-red-400 rounded-lg flex items-center justify-center font-bold mb-4">
								<LockKeyhole strokeWidth={1} />
							</div>
							<h3 className="text-lg font-semibold text-white mb-2">Cookies HTTP-Only</h3>
							<p className="text-sm text-slate-400 leading-relaxed">
								The tokens never touch LocalStorage. The browser handles them invisibly and securely using protected cookies.
							</p>
						</div>

						{/* Tarjeta 2 */}
						<div className="bg-slate-900 p-6 rounded-xl border border-slate-800/80 hover:border-slate-700 transition">
							<div className="h-10 w-10 bg-emerald-500/10 text-blue-400 rounded-lg flex items-center justify-center font-bold mb-4">
								<Globe strokeWidth={1} />
							</div>
							<h3 className="text-lg font-semibold text-white mb-2">Spring Cloud Gateway</h3>
							<p className="text-sm text-slate-400 leading-relaxed">
								It acts as a single point of entry, managing intelligent routing to APIs and secure token injection.
							</p>
						</div>

						{/* Tarjeta 3 */}
						<div className="bg-slate-900 p-6 rounded-xl border border-slate-800/80 hover:border-slate-700 transition">
							<div className="h-10 w-10 bg-emerald-500/10 text-amber-400 rounded-lg flex items-center justify-center font-bold mb-4">
								<KeyRound strokeWidth={1} />
							</div>
							<h3 className="text-lg font-semibold text-white mb-2">Keycloak IAM</h3>
							<p className="text-sm text-slate-400 leading-relaxed">
								Federated identity management, role-based access control (RBAC), and standard OpenID Connect flows.
							</p>
						</div>
					</div>
				</article>
			</section>

			{/* 4. FOOTER */}
			<footer className="border-t border-slate-800 bg-slate-950 py-8 text-center text-sm text-slate-500">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
					<p>© 2026 Mi Portfolio Backend + Frontend. Desarrollado con Spring & React.</p>
					<div className="flex space-x-6">
						<span className="text-slate-400">BFF Architecture</span>
						<span className="text-slate-400">OAuth2 Secure</span>
					</div>
				</div>
			</footer>

		</div>
	)
}

export default Home