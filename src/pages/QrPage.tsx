import { useEffect, useMemo, useState } from 'react';
import { Lock, Download, QrCode, Eye, LogOut, Sparkles } from 'lucide-react';

const PASSWORD = '1234';
const STORAGE_KEY = 'qr-page-unlocked';

const imageModules = import.meta.glob('../assets/qr/*.{png,jpg,jpeg,webp,svg}', {
  eager: true,
  import: 'default',
}) as Record<string, string>;

const banks = [
  { file: 'esewa.jpg', name: 'eSewa', subtitle: 'Digital wallet QR' },
  { file: 'global-ime.jpg', name: 'Global IME Bank', subtitle: 'Bank QR payment' },
  { file: 'khalti.png', name: 'Khalti', subtitle: 'Wallet QR payment' },
  { file: 'nic-asia.png', name: 'NIC Asia Bank', subtitle: 'Bank QR payment' },
  { file: 'snap.png', name: 'Snap', subtitle: 'Mobile QR payment' },
];

const QrPage = () => {
  const [password, setPassword] = useState('');
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [error, setError] = useState('');
  const [isShaking, setIsShaking] = useState(false);

  useEffect(() => {
    const unlocked = window.sessionStorage.getItem(STORAGE_KEY) === 'true';
    setIsUnlocked(unlocked);
  }, []);

  const qrItems = useMemo(
    () =>
      banks
        .map((bank) => {
          const src = imageModules[`../assets/qr/${bank.file}`];
          return src
            ? {
                ...bank,
                src,
              }
            : null;
        })
        .filter((item): item is { file: string; name: string; subtitle: string; src: string } => item !== null),
    [],
  );

  const handleUnlock = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (password === PASSWORD) {
      window.sessionStorage.setItem(STORAGE_KEY, 'true');
      setIsUnlocked(true);
      setError('');
      setPassword('');
      return;
    }

    setError('Wrong password. Please try again.');
    setIsShaking(true);
    window.setTimeout(() => setIsShaking(false), 450);
  };

  const handleLogout = () => {
    window.sessionStorage.removeItem(STORAGE_KEY);
    setIsUnlocked(false);
  };

  const handleDownload = async (src: string, fileName: string) => {
    const response = await fetch(src);
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    link.remove();
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 pt-24 pb-16 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {!isUnlocked ? (
          <div className="max-w-md mx-auto mt-10 bg-gray-900/80 backdrop-blur-xl border border-gray-700 rounded-3xl p-8 shadow-2xl shadow-blue-500/10 animate-fadeInUp">
            <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-blue-600/20 flex items-center justify-center animate-pulse">
              <Lock className="w-8 h-8 text-blue-400" />
            </div>

            <h1 className="text-3xl font-bold text-white text-center mb-3">Protected QR Gallery</h1>
            <p className="text-gray-400 text-center mb-8">
              Enter the password to view and download the QR collection.
            </p>

            <form onSubmit={handleUnlock} className={isShaking ? 'animate-bounce' : ''}>
              <label className="block text-sm font-medium text-gray-300 mb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                className="w-full px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              {error && <p className="mt-3 text-sm text-red-400">{error}</p>}

              <button
                type="submit"
                className="mt-6 w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold py-3 rounded-xl transition-all duration-300 shadow-lg shadow-blue-500/20"
              >
                <Eye className="w-4 h-4" />
                Open QR Page
              </button>
            </form>

            <p className="mt-6 text-xs text-gray-500 text-center">
              contact <a href="mailto:aashisrijal252@gmail.com" className="text-blue-400 hover:underline">
                aashisrijal252@gmail.com
              </a> for the password.
            </p>
          </div>
        ) : (
          <>
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600/15 border border-blue-500/30 text-blue-300 mb-5">
                  <Sparkles className="w-4 h-4" />
                  <span className="text-sm font-medium">Animated QR download center</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">QR Collection</h1>
                <p className="text-gray-300 text-lg max-w-2xl">
                  All QR images from the QR folder are displayed here with their bank or wallet name. Each card can be downloaded individually.
                </p>
              </div>

              <button
                onClick={handleLogout}
                className="inline-flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-5 py-3 rounded-xl border border-gray-700 transition-colors"
              >
                <LogOut className="w-4 h-4" />
                Lock Page
              </button>
            </div>

            <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {qrItems.map((item, index) => (
                <div
                  key={item.file}
                  className="group relative overflow-hidden rounded-3xl border border-gray-700 bg-gray-900/75 backdrop-blur-xl p-5 shadow-xl hover:shadow-blue-500/20 transition-all duration-500 hover:-translate-y-1 animate-fadeInUp"
                  style={{ animationDelay: `${index * 0.08}s` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-blue-500/5 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h2 className="text-2xl font-bold text-white">{item.name}</h2>
                        <p className="text-sm text-gray-400">{item.subtitle}</p>
                      </div>
                      <div className="w-11 h-11 rounded-full bg-blue-500/15 border border-blue-500/20 flex items-center justify-center animate-pulse">
                        <QrCode className="w-5 h-5 text-blue-400" />
                      </div>
                    </div>

                    <div className="relative rounded-2xl bg-white p-4 flex items-center justify-center overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-200/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                      <img
                        src={item.src}
                        alt={`${item.name} QR`}
                        className="relative z-10 w-full max-w-[240px] aspect-square object-contain animate-float"
                      />
                    </div>

                    <div className="mt-5 flex items-center justify-between gap-3">
                      <button
                        onClick={() => handleDownload(item.src, `${item.file}`)}
                        className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-xl font-medium transition-colors"
                      >
                        <Download className="w-4 h-4" />
                        Download
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default QrPage;