import React, { useState } from 'react';

const PreLogin = ({ onLoginClick }) => {
    const [loading, setLoading] = useState(true);

    const handleLogin = () => {
        setLoading(true);
        onLoginClick();
    };

    setTimeout(() => {
        setLoading(false)
    }, 2000);

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 p-4 transition-colors duration-300">
            <div className="bg-white dark:bg-gray-800 p-8 md:p-10 rounded-2xl shadow-xl max-w-md w-full text-center transition-all">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-5">Accediendo al sistema</h2>

                {!loading ? (
                    <>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                            Para garantizar un acceso seguro, utilizamos servicios de autenticación federados.
                            Por favor, inicia sesión para continuar.
                        </p>

                        {/* Caja de advertencia sobre Render con soporte Dark Mode */}
                        <div className="bg-amber-50 dark:bg-amber-950/40 p-4 rounded-r-lg mb-8 flex items-start text-left">
                            <div>
                                <p className="text-amber-900 dark:text-amber-400 text-sm font-semibold mb-1">Nota importante:</p>
                                <p className="text-amber-800 dark:text-amber-300/90 text-sm leading-relaxed">
                                    Estamos manteniendo nuestros servidores en la nube. ¡Gracias por tu paciencia!
                                    <span className="hidden">El primer inicio de sesión puede demorar
                                        <span className="font-bold text-amber-950 dark:text-amber-200"> 60 segundos o más</span>. ¡Gracias por tu paciencia!
                                    </span>
                                </p>
                            </div>
                        </div>

                        <button className="btn-primary w-full p-4" onClick={handleLogin}>
                            Ingresar al Sistema
                        </button>
                    </>
                ) : (
                    /* Estado de Carga (Spinner) con soporte Dark Mode */
                    <div className="flex flex-col items-center py-6">
                        <div className="animate-spin rounded-full h-12 w-12 border-4 border-gray-200 dark:border-gray-700 border-t-emerald-600 dark:border-t-emerald-500 mb-6"></div>
                        <p className="text-gray-800 dark:text-gray-200 font-semibold mb-2 text-lg">Conectando con el servidor de identidad...</p>
                        <p className="text-gray-400 dark:text-gray-500 text-sm">Usamos servicios gratuitos, cuando el servidor esté disponible te mostraremos el enlace de acceso.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PreLogin;