import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section className="flex items-center justify-center min-h-[calc(100vh-4rem)] bg-slate-50 dark:bg-slate-950 px-4 transition-colors duration-300">
      <div className="text-center">
        <h1 className="text-9xl font-extrabold text-emerald-500 tracking-widest animate-bounce">
          404
        </h1>
        <div className="bg-slate-900 text-white dark:bg-white dark:text-slate-900 px-3 py-1 text-sm rounded-sm rotate-12 inline-block font-mono mb-6">
          Page Not Found
        </div>
        <p className="text-slate-600 dark:text-slate-400 text-lg mb-8 max-w-md mx-auto">
          The page you are looking for doesn't exist or has been moved to a secure vault.
        </p>
        <Link to="/" className="btn-primary p-4 inline-flex items-center">
          Back to Home
        </Link>
      </div>
    </section>
  );
}

export default NotFound;