import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <header className = "sticky top-0 z-50 backdrop-blur-md bg-slate-900 border-b border-slate-800" >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                    <div className="h-8 w-8 bg-emerald-500 rounded-lg flex items-center justify-center font-bold text-white shadow-lg shadow-emerald-500/30">
                        S
                    </div>
                    <Link to="/portfolio" className="text-xl font-bold tracking-tight bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
                        SecureAuth
                    </Link>
                </div>
                <nav className="hidden md:flex space-x-8 text-sm font-medium text-slate-400">
                    <Link to="/" className="hidden hover:text-white transition">Inicio</Link>
                </nav>
                <div>
                    <Link to="/prelogin" className="btn-primary">
                        Acceder
                    </Link>
                </div>
            </div>
        </header >
    );
}