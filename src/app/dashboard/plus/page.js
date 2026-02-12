
export default function PlusPage() {
    return (
        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 min-h-[400px]">
            <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-blue-100 text-blue-600 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="16" /><line x1="8" y1="12" x2="16" y2="12" /></svg>
                </div>
                <h1 className="text-2xl font-bold text-gray-900">Plus Features</h1>
            </div>
            <p className="text-gray-600">This page will contain advanced analytical features and expanded capabilities.</p>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 border border-gray-100 rounded-lg bg-gray-50">
                    <h3 className="font-semibold mb-2">Advanced Analytics</h3>
                    <p className="text-sm text-gray-500">Enable deep-dive data processing for your projects.</p>
                </div>
                <div className="p-6 border border-gray-100 rounded-lg bg-gray-50">
                    <h3 className="font-semibold mb-2">Team Collaboration</h3>
                    <p className="text-sm text-gray-500">Invite up to 50 members to your workspace.</p>
                </div>
            </div>
        </div>
    );
}
