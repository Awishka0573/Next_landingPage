
export default function MinusPage() {
    return (
        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 min-h-[400px]">
            <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-purple-100 text-purple-600 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="8" y1="12" x2="16" y2="12" /></svg>
                </div>
                <h1 className="text-2xl font-bold text-gray-900">Minus Controls</h1>
            </div>
            <p className="text-gray-600">Manage resource reduction and optimization settings here.</p>

            <div className="mt-8 border-t border-gray-100 pt-6">
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                    <div className="flex">
                        <div className="ml-3">
                            <p className="text-sm text-yellow-700">
                                Resource limiting is currently active. Performance may be optimized but restricted.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
