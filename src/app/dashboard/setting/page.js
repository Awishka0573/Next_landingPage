
export default function SettingPage() {
    return (
        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
            <div className="flex items-center gap-3 mb-8">
                <div className="p-2 bg-gray-100 text-gray-600 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" /><circle cx="12" cy="12" r="3" /></svg>
                </div>
                <h1 className="text-2xl font-bold text-gray-900">Account Settings</h1>
            </div>

            <div className="space-y-6 max-w-2xl">
                <div className="grid grid-cols-1 gap-4">
                    <label className="text-sm font-semibold text-gray-700">Display Name</label>
                    <input
                        type="text"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                        placeholder="Your name"
                    />
                </div>

                <div className="grid grid-cols-1 gap-4">
                    <label className="text-sm font-semibold text-gray-700">Email Address</label>
                    <input
                        type="email"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-gray-50 text-gray-500 cursor-not-allowed"
                        placeholder="email@example.com"
                        disabled
                    />
                    <p className="text-xs text-gray-500">Email cannot be changed once the account is created.</p>
                </div>

                <div className="pt-4">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors">
                        Save Changes
                    </button>
                </div>
            </div>
        </div>
    );
}
