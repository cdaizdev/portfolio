import { useEffect, useState } from 'react';

export default function UserProfileForm() {
  const [profile, setProfile] = useState({
    nombre: '',
    email: '',
    telefono: '',
    ciudad: '',
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    async function loadProfile() {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch('/api/v1/usuarios/perfil', {
          method: 'GET',
          credentials: 'include',
        });

        if (!response.ok) {
          throw new Error('No se pudo cargar el perfil.');
        }

        const data = await response.json();
        setProfile({
          nombre: data.nombre || '',
          email: data.email || '',
          telefono: data.telefono || '',
          ciudad: data.ciudad || '',
        });
      } catch (err) {
        setError(err.message || 'Error al cargar el perfil.');
      } finally {
        setLoading(false);
      }
    }

    loadProfile();
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSaving(true);
    setError(null);
    setSuccessMessage('');

    try {
      const response = await fetch('/api/v1/usuarios/perfil', {
        method: 'PUT',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(profile),
      });

      if (!response.ok) {
        throw new Error('No se pudo guardar la información.');
      }

      setSuccessMessage('Perfil actualizado correctamente.');
    } catch (err) {
      setError(err.message || 'Error al guardar el perfil.');
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <div className="bg-white shadow-lg rounded-3xl border border-slate-200 overflow-hidden">
        <div className="bg-gradient-to-r from-sky-500 to-cyan-500 p-8 text-white">
          <h1 className="text-3xl font-semibold">Mi perfil</h1>
          <p className="mt-2 text-slate-100 max-w-2xl">
            Revisa y actualiza tus datos personales. El navegador enviará las cookies de sesión automáticamente.
          </p>
        </div>

        <div className="p-8">
          {loading ? (
            <div className="flex items-center justify-center py-16">
              <div className="w-12 h-12 border-4 border-slate-200 border-t-sky-500 rounded-full animate-spin" />
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <div className="rounded-2xl bg-red-50 border border-red-200 p-4 text-red-700">
                  {error}
                </div>
              )}

              {successMessage && (
                <div className="rounded-2xl bg-emerald-50 border border-emerald-200 p-4 text-emerald-700">
                  {successMessage}
                </div>
              )}

              <div className="grid gap-6 md:grid-cols-2">
                <label className="block">
                  <span className="text-sm font-medium text-slate-700">Nombre</span>
                  <input
                    type="text"
                    name="nombre"
                    value={profile.nombre}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
                    placeholder="Tu nombre"
                  />
                </label>

                <label className="block">
                  <span className="text-sm font-medium text-slate-700">Correo electrónico</span>
                  <input
                    type="email"
                    name="email"
                    value={profile.email}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
                    placeholder="usuario@ejemplo.com"
                  />
                </label>

                <label className="block">
                  <span className="text-sm font-medium text-slate-700">Teléfono</span>
                  <input
                    type="text"
                    name="telefono"
                    value={profile.telefono}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
                    placeholder="+34 600 123 456"
                  />
                </label>

                <label className="block">
                  <span className="text-sm font-medium text-slate-700">Ciudad</span>
                  <input
                    type="text"
                    name="ciudad"
                    value={profile.ciudad}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
                    placeholder="Madrid"
                  />
                </label>
              </div>

              <div className="rounded-3xl bg-slate-50 border border-slate-200 p-5">
                <h2 className="text-lg font-semibold text-slate-900">Información segura</h2>
                <p className="mt-2 text-sm text-slate-600">
                  El formulario usa cookies de sesión HTTP-only para mantener la autenticación y no necesita enviar tokens manualmente.
                </p>
              </div>

              <div className="flex items-center justify-end gap-4">
                <button
                  type="submit"
                  disabled={saving}
                  className="inline-flex items-center justify-center rounded-2xl bg-sky-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-sky-700 disabled:cursor-not-allowed disabled:bg-slate-400"
                >
                  {saving ? 'Guardando...' : 'Guardar cambios'}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
