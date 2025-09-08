import { Head, Link, usePage, router } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function Index({auth}) {
  const { posts } = usePage().props;

  const remove = (id) => {
    if (confirm('Delete this post?')) {
      router.delete(route('admin.posts.destroy', id));
    }
  };

  return (
     <AuthenticatedLayout
                user={auth.user}
                header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Posts</h2>}
            >
    <div className="max-w-6xl mx-auto py-10 px-4">
      <Head title="Posts" />
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Posts</h1>
        <Link href={route('admin.posts.create')} className="bg-primary text-white px-4 py-2 rounded hover:bg-secondary">New Post</Link>
      </div>

      <div className="overflow-auto border rounded-lg">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-100 text-left text-sm font-semibold text-gray-700">
            <tr>
              <th className="px-4 py-2">Title</th>
              <th className="px-4 py-2">Category</th>
              <th className="px-4 py-2">Published</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody className="text-sm text-gray-700">
            {posts.data.map(p => (
              <tr key={p.id} className="border-t">
                <td className="px-4 py-2">{p.title}</td>
                <td className="px-4 py-2">{p.category || '-'}</td>
                <td className="px-4 py-2">{p.published_at ? new Date(p.published_at).toLocaleDateString() : '-'}</td>
                <td className="px-4 py-2 space-x-3">
                  <Link href={route('admin.posts.edit', p.id)} className="text-blue-600 hover:underline">Edit</Link>
                  <button onClick={() => remove(p.id)} className="text-red-600 hover:underline">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Paginación simple */}
      <div className="flex justify-center gap-2 mt-6">
        {posts.links.map((l, i) => (
          <Link
            key={i}
            href={l.url || '#'}
            className={`px-3 py-1 rounded border ${l.active ? 'bg-primary text-white border-primary' : 'bg-white'}`}
            dangerouslySetInnerHTML={{ __html: l.label }}
          />
        ))}
      </div>
    </div>
    </AuthenticatedLayout>
  );
}
