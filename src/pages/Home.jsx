import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { ExternalLink, Globe, LockKeyhole, KeyRound } from 'lucide-react';

function Home() {

	return (
		<main className="flex items-center justify-center min-h-screen bg-slate-50 dark:bg-slate-950 px-4 transition-colors duration-300">
			<div className="max-w-md w-full text-center py-12 px-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xl dark:shadow-none transition-all duration-300">
				<span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-amber-100 dark:bg-amber-500/10 text-amber-800 dark:text-amber-400 border border-amber-200 dark:border-amber-500/20 mb-6">
					Important notice: 301 redirect
				</span>
				<h1 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl mb-4">
					We have moved <br />
					<span className="bg-gradient-to-r from-emerald-500 to-cyan-500 dark:from-emerald-400 dark:to-cyan-400 bg-clip-text text-transparent">
						permanently
					</span>
				</h1>
				<p className="text-slate-600 dark:text-slate-400 text-base mb-8 leading-relaxed">
					This website is no longer updated at this address. We have moved all our content and services to a new, faster, and more secure platform.
				</p>
				<div className="flex flex-col sm:flex-row gap-4 justify-center">
					<a href="https://web-client-arc3.onrender.com/" target="_blank" rel="noreferrer" className="btn-primary p-4 inline-flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-emerald-500/20">
						Go to the new page
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
							strokeWidth={2} stroke="currentColor" className="w-4 h-4">
							<path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
						</svg>
					</a>
				</div>
			</div>
		</main>
	)
}

export default Home