import { Head, Link, usePage } from '@inertiajs/react';
import { useEffect, useState } from 'react';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import axios from 'axios';
import image from '../../../assets/images/hero/Hero-1.avif'; // Adjust the path as necessary

export default function PostsIndex() {
  const { hero } = usePage().props;
  const [posts, setPosts] = useState([]);
  const [meta, setMeta] = useState({ current_page: 1, last_page: 1, per_page: 6, total: 0 });
  const [loading, setLoading] = useState(false);

  const fetchPage = async (page = 1) => {
    setLoading(true);
    try {
      const { data } = await axios.get(`/api/posts?page=${page}&per_page=${meta.per_page || 6}`);
      setPosts(data.data || []);
      setMeta({
        current_page: data.current_page,
        last_page: data.last_page,
        per_page: data.per_page,
        total: data.total,
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPage(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const goTo = (page) => {
    if (page < 1 || page > meta.last_page) return;
    fetchPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <Head title="Projects" />
      <Header />

      {/* Hero */}
      <section className="mt-20 relative">
        <div className="absolute inset-0">
          <img
            src={image}
            alt="Posts hero"
            className="w-full h-64 md:h-80 object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative max-w-6xl mx-auto h-64 md:h-80 flex items-center px-4">
          <h1 className="text-3xl md:text-5xl font-bold text-white">{hero?.title}</h1>
        </div>
      </section>

      {/* Listado */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          {loading ? (
            <div className="text-center py-12">Loading…</div>
          ) : posts.length === 0 ? (
            <div className="text-center py-12 text-gray-600">No posts yet.</div>
          ) : (
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <article key={post.id} className="bg-white shadow rounded-lg overflow-hidden">
                  <img
                    src={`/storage/${post.cover}`}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <div className="flex items-center gap-3 text-sm mb-1">
                      {post.category && (
                        <span className="text-blue-600 font-medium">{post.category}</span>
                      )}
                      <span className="text-gray-400">
                        {post.published_at ? new Date(post.published_at).toLocaleDateString() : ''}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-800 line-clamp-2">{post.title}</h3>
                    {post.excerpt && (
                      <p className="text-sm text-gray-600 mt-2 line-clamp-3">{post.excerpt}</p>
                    )}
                    <Link
                      href={`/posts/${post.slug}`}
                      className="inline-block mt-4 bg-secondary hover:bg-primary transition duration-300 text-white font-semibold py-2 px-5 rounded-full"
                    >
                      View Details →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}

          {/* Paginador */}
          {meta.last_page > 1 && (
            <div className="flex items-center justify-center gap-2 mt-8">
              <button
                onClick={() => goTo(meta.current_page - 1)}
                disabled={meta.current_page === 1}
                className="px-3 py-2 rounded border bg-white disabled:opacity-50"
              >
                Prev
              </button>

              {/* Números (compacto) */}
              {Array.from({ length: meta.last_page }).map((_, i) => {
                const page = i + 1;
                const active = page === meta.current_page;
                // Compactar: mostrar primeras 1-2, últimas 1-2 y ventana alrededor de la actual
                const isEdge =
                  page <= 2 || page > meta.last_page - 2 || Math.abs(page - meta.current_page) <= 1;

                if (!isEdge) {
                  if (page === 3 || page === meta.last_page - 2) {
                    return (
                      <span key={page} className="px-2 text-gray-400">
                        …
                      </span>
                    );
                  }
                  return null;
                }

                return (
                  <button
                    key={page}
                    onClick={() => goTo(page)}
                    className={`px-3 py-2 rounded border ${
                      active ? 'bg-primary text-white border-primary' : 'bg-white'
                    }`}
                  >
                    {page}
                  </button>
                );
              })}

              <button
                onClick={() => goTo(meta.current_page + 1)}
                disabled={meta.current_page === meta.last_page}
                className="px-3 py-2 rounded border bg-white disabled:opacity-50"
              >
                Next
              </button>
            </div>
          )}
        </div>
      </section>
      <Footer />
      
    </>
  );
}
