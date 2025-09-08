import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { useForm, Head, router } from '@inertiajs/react';
import BlocksEditor from './BlocksEditor';

export default function Create({auth}) {
  const { data, setData, post, processing, errors } = useForm({
    title: '',
    slug: '',
    excerpt: '',
    category: '',
    published_at: '',
    cover: null,
    content: [],
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = new FormData();
    form.append('title', data.title);
    if (data.slug) form.append('slug', data.slug);
    if (data.excerpt) form.append('excerpt', data.excerpt);
    if (data.category) form.append('category', data.category);
    if (data.published_at) form.append('published_at', data.published_at);
    if (data.cover) form.append('cover', data.cover);

    // Para subir archivos incrustados en bloques:
    const payload = data.content.map((b, i) => {
      const copy = { ...b };
      if (b.type === 'image' && b.file) {
        form.append(`content_files[${i}]`, b.file); // backend guardará y sustituirá
      }
      if (b.type === 'gallery' && b.newFiles?.length) {
        b.newFiles.forEach((f, k) => form.append(`content_files_gallery[${i}][${k}]`, f));
      }
      delete copy.file;
      delete copy.newFiles;
      return copy;
    });
    form.append('content', JSON.stringify(payload));

    post(route('admin.posts.store'), { data: form });
  };

  return (
    <AuthenticatedLayout
                  user={auth.user}
                  header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Posts</h2>}
              >
      <div className="max-w-5xl mx-auto py-10 px-4">
        <Head title="Create Post" />
        <h1 className="text-3xl font-bold mb-6">Create Post</h1>

        <form onSubmit={handleSubmit} encType="multipart/form-data" className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <Field label="Title" error={errors.title}>
              <input className="w-full border rounded p-2" value={data.title} onChange={e => setData('title', e.target.value)} />
            </Field>
            <Field label="Slug (optional)">
              <input className="w-full border rounded p-2" value={data.slug} onChange={e => setData('slug', e.target.value)} />
            </Field>
            <Field label="Category">
              <input className="w-full border rounded p-2" value={data.category} onChange={e => setData('category', e.target.value)} />
            </Field>
            <Field label="Published at">
              <input type="datetime-local" className="w-full border rounded p-2" value={data.published_at} onChange={e => setData('published_at', e.target.value)} />
            </Field>
          </div>

          <Field label="Excerpt">
            <textarea className="w-full border rounded p-2" rows={3} value={data.excerpt} onChange={e => setData('excerpt', e.target.value)} />
          </Field>

          <Field label="Cover">
            <input type="file" accept="image/*" onChange={e => setData('cover', e.target.files?.[0] || null)} />
            {errors.cover && <p className="text-red-600 text-sm">{errors.cover}</p>}
          </Field>

          <div>
            <h2 className="text-xl font-semibold mb-2">Content blocks</h2>
            <BlocksEditor
              value={data.content}
              onChange={(v) => setData('content', v)}
            />
            {errors.content && <p className="text-red-600 text-sm">{errors.content}</p>}
          </div>

          <div className="flex gap-3">
            <button disabled={processing} className="bg-primary text-white px-5 py-2 rounded hover:bg-secondary">Save</button>
          </div>
        </form>
      </div>
    </AuthenticatedLayout>
      
  );
}

function Field({ label, error, children }) {
  return (
    <div>
      <label className="block text-sm font-semibold mb-1">{label}</label>
      {children}
      {error && <p className="text-red-600 text-sm mt-1">{error}</p>}
    </div>
  );
}
