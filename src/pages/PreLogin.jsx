import React, { useState } from 'react';

const PreLogin = ({ onLoginClick }) => {
    const [loading, setLoading] = useState(true);
    const serviceAvailable = useState(false);
    const handleLogin = () => {
        setLoading(true);
        onLoginClick();
    };

    setTimeout(() => {
        setLoading(false)
    }, 2000);

    return (
        <>
            <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 p-4 transition-colors duration-300">
                <div className="bg-white dark:bg-gray-800 p-8 md:p-10 rounded-2xl shadow-xl max-w-md w-full text-center transition-all">
                    <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-5">Accessing the system</h2>

                    {!loading ? (
                        <>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                                To ensure secure access, we use federated authentication services. Please log in to continue.
                            </p>
                            <div className="bg-amber-50 dark:bg-amber-950/40 p-4 rounded-r-lg mb-8 flex items-start text-left">
                                <div>
                                    <p className="text-amber-900 dark:text-amber-400 text-sm font-semibold mb-1">Notice:</p>
                                    <p className="text-amber-800 dark:text-amber-300/90 text-sm leading-relaxed">
                                        We are perfoming maintenance on our cloud servers. Thank you for your patience.
                                        <span className="hidden">
                                            The first login may around
                                            <span className="font-bold text-amber-950 dark:text-amber-200"> 60 seconds or more</span>. Thanks for your patience!
                                        </span>
                                    </p>
                                </div>
                            </div>
                            {!serviceAvailable ?
                                (<><button className="btn-primary w-full p-4" onClick={handleLogin}>Request access</button></>) :
                                (<><button className="btn-warning w-full p-4">Service not available</button></>)
                            }

                        </>
                    ) : (
                        /* Estado de Carga (Spinner) con soporte Dark Mode */
                        <div className="flex flex-col items-center py-6">
                            <div className="animate-spin rounded-full h-12 w-12 border-4 border-gray-200 dark:border-gray-700 border-t-emerald-600 dark:border-t-emerald-500 mb-6"></div>
                            <p className="text-gray-800 dark:text-gray-200 font-semibold mb-2 text-lg">Connecting to the identity server...</p>
                            <p className="text-gray-400 dark:text-gray-500 text-sm">We use free services, as soon as the server is available we will show you the request access link.</p>
                        </div>
                    )}
                </div>
            </div>
            <footer className="border-t border-slate-800 bg-slate-950 py-8 text-center text-sm text-slate-500">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p>© 2026 Mi Portfolio Backend + Frontend. Desarrollado con Spring & React.</p>
                    <div className="flex space-x-6">
                        <span className="text-slate-400">BFF Architecture</span>
                        <span className="text-slate-400">OAuth2 Secure</span>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default PreLogin;