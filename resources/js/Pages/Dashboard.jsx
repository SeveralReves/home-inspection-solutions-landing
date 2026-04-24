import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, router, usePage } from '@inertiajs/react';
import { useState } from 'react';

function StatusBadge({ sent }) {
    if (sent) {
        return (
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-700">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Sent
            </span>
        );
    }
    return (
        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-700">
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
            Not Sent
        </span>
    );
}

function ResendButton({ messageId, onResend, loading }) {
    return (
        <button
            onClick={() => onResend(messageId)}
            disabled={loading}
            className="inline-flex items-center gap-1 px-3 py-1 text-xs font-medium rounded-md bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
            {loading ? (
                <svg className="w-3 h-3 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                </svg>
            ) : (
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
            )}
            Resend
        </button>
    );
}

export default function Dashboard({ auth, messages }) {
    const { flash } = usePage().props;
    const [loadingId, setLoadingId] = useState(null);

    const sentCount = messages.filter(m => m.email_sent).length;
    const notSentCount = messages.length - sentCount;

    function handleResend(id) {
        setLoadingId(id);
        router.post(route('messages.resend', id), {}, {
            onFinish: () => setLoadingId(null),
        });
    }

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">

                    {/* Flash messages */}
                    {flash?.success && (
                        <div className="flex items-center gap-2 px-4 py-3 rounded-lg bg-green-50 border border-green-200 text-green-800 text-sm">
                            <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            {flash.success}
                        </div>
                    )}
                    {flash?.error && (
                        <div className="flex items-center gap-2 px-4 py-3 rounded-lg bg-red-50 border border-red-200 text-red-800 text-sm">
                            <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1-9v4a1 1 0 002 0V9a1 1 0 00-2 0zm1-4a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd" />
                            </svg>
                            {flash.error}
                        </div>
                    )}

                    {/* Stats */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-5">
                            <p className="text-sm text-gray-500">Total Contacts</p>
                            <p className="text-3xl font-bold text-gray-800 mt-1">{messages.length}</p>
                        </div>
                        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-5">
                            <p className="text-sm text-gray-500">Emails Sent</p>
                            <p className="text-3xl font-bold text-green-600 mt-1">{sentCount}</p>
                        </div>
                        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-5">
                            <p className="text-sm text-gray-500">Not Sent</p>
                            <p className="text-3xl font-bold text-red-500 mt-1">{notSentCount}</p>
                        </div>
                    </div>

                    {/* Table */}
                    <div className="bg-white shadow-sm rounded-lg border border-gray-100 overflow-hidden">
                        <div className="px-6 py-4 border-b border-gray-100">
                            <h3 className="text-base font-semibold text-gray-800">Contacts</h3>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-gray-100">
                                <thead className="bg-gray-50">
                                    <tr>
                                        {['#', 'Name', 'Email', 'Phone', 'Service', 'Message', 'Date', 'Email Sent', 'Action'].map((h, i) => (
                                            <th key={i} className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wide whitespace-nowrap">
                                                {h}
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-50">
                                    {messages.map((message) => (
                                        <tr key={message.id} className="hover:bg-gray-50 transition-colors">
                                            <td className="px-4 py-3 text-sm text-gray-400">{message.id}</td>
                                            <td className="px-4 py-3 text-sm font-medium text-gray-800 whitespace-nowrap">{message.name}</td>
                                            <td className="px-4 py-3 text-sm text-gray-600">
                                                <a href={`mailto:${message.email}`} className="hover:text-blue-600 hover:underline">{message.email}</a>
                                            </td>
                                            <td className="px-4 py-3 text-sm text-gray-600 whitespace-nowrap">
                                                <a href={`tel:${message.phone}`} className="hover:text-blue-600 hover:underline">{message.phone}</a>
                                            </td>
                                            <td className="px-4 py-3 text-sm text-gray-600 whitespace-nowrap">{message.serviceType ?? '—'}</td>
                                            <td className="px-4 py-3 text-sm text-gray-600 max-w-xs">
                                                <p className="truncate" title={message.message}>{message.message}</p>
                                            </td>
                                            <td className="px-4 py-3 text-sm text-gray-500 whitespace-nowrap">
                                                {new Date(message.created_at).toLocaleDateString('en-US', {
                                                    month: 'short', day: 'numeric', year: 'numeric',
                                                })}
                                            </td>
                                            <td className="px-4 py-3">
                                                <StatusBadge sent={message.email_sent} />
                                            </td>
                                            <td className="px-4 py-3">
                                                <ResendButton
                                                    messageId={message.id}
                                                    onResend={handleResend}
                                                    loading={loadingId === message.id}
                                                />
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>

                            {messages.length === 0 && (
                                <div className="text-center py-12 text-gray-400 text-sm">No contacts yet.</div>
                            )}
                        </div>
                    </div>

                </div>
            </div>
        </AuthenticatedLayout>
    );
}
