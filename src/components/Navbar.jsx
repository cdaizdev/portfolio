import React from 'react';
import { Link } from 'react-router-dom';
import DarkModeToggle from './DarkModeToggle';

export default function Navbar() {
    return (
        <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 dark:bg-slate-900/80 border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                    <div className="h-8 w-8 bg-emerald-500 rounded-lg flex items-center justify-center font-bold text-white shadow-lg shadow-emerald-500/30">
                        S
                    </div>
                    {/* Gradiente del título adaptado para contraste en ambos modos */}
                    <Link to="/" className="text-xl font-bold tracking-tight bg-gradient-to-r from-slate-900 via-slate-700 to-emerald-600 dark:from-white dark:via-slate-300 dark:to-emerald-400 bg-clip-text text-transparent">
                        SecuredAuth
                    </Link>
                </div>
                <div className='flex items-center gap-4'>
                    <nav className="hidden mx-4 md:flex space-x-8 text-sm font-medium text-slate-600 dark:text-slate-400">
                        <Link to="/" className="hover:text-emerald-900 dark:hover:text-emerald-400 transition">Home</Link>
                    </nav>
                    <DarkModeToggle />
                    <Link to="/prelogin" className="btn-primary">
                        Access
                    </Link>
                </div>
            </div>
        </header>
    );
}