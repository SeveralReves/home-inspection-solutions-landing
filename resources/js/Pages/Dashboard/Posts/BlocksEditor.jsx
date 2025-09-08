import { useState } from 'react';

/**
 * Tipos soportados: title, text(HTML), image, gallery, youtube
 * props:
 *  - value: array de bloques
 *  - onChange: fn(newBlocks)
 */
export default function BlocksEditor({ value = [], onChange }) {
  const [blocks, setBlocks] = useState(value);

  const commit = (next) => {
    setBlocks(next);
    onChange(next);
  };

  const addBlock = (type) => {
    const base = { type, value: type === 'gallery' ? [] : '' };
    if (type === 'youtube') base.title = '';
    commit([...blocks, base]);
  };

  const updateBlock = (i, key, val) => {
    const next = blocks.slice();
    next[i] = { ...next[i], [key]: val };
    commit(next);
  };

  const move = (i, dir) => {
    const j = i + dir;
    if (j < 0 || j >= blocks.length) return;
    const next = blocks.slice();
    [next[i], next[j]] = [next[j], next[i]];
    commit(next);
  };

  const remove = (i) => {
    const next = blocks.slice();
    next.splice(i, 1);
    commit(next);
  };

  return (
    <div className="space-y-4">
      {/* Toolbar */}
      <div className="flex flex-wrap gap-2">
        <button type="button" onClick={() => addBlock('title')} className="px-3 py-1 border rounded">+ Title</button>
        <button type="button" onClick={() => addBlock('text')} className="px-3 py-1 border rounded">+ Text (HTML)</button>
        <button type="button" onClick={() => addBlock('image')} className="px-3 py-1 border rounded">+ Image</button>
        <button type="button" onClick={() => addBlock('gallery')} className="px-3 py-1 border rounded">+ Gallery</button>
        <button type="button" onClick={() => addBlock('youtube')} className="px-3 py-1 border rounded">+ YouTube</button>
      </div>

      {blocks.map((b, i) => (
        <div key={i} className="border rounded p-4 space-y-3 bg-gray-50">
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold uppercase">{b.type}</span>
            <div className="space-x-2">
              <button type="button" onClick={() => move(i, -1)} className="px-2 py-1 border rounded">↑</button>
              <button type="button" onClick={() => move(i, +1)} className="px-2 py-1 border rounded">↓</button>
              <button type="button" onClick={() => remove(i)} className="px-2 py-1 border rounded text-red-600">Delete</button>
            </div>
          </div>

          {b.type === 'title' && (
            <input
              type="text"
              value={b.value || ''}
              onChange={(e) => updateBlock(i, 'value', e.target.value)}
              className="w-full border rounded p-2"
              placeholder="Section title"
            />
          )}

          {b.type === 'text' && (
            <textarea
              value={b.value || ''}
              onChange={(e) => updateBlock(i, 'value', e.target.value)}
              className="w-full border rounded p-2 min-h-[120px]"
              placeholder="HTML content (allowed: <p>, <ul>, <strong>, ...)"
            />
          )}

          {b.type === 'image' && (
            <div className="space-y-2">
              <input
                type="file"
                accept="image/*"
                onChange={(e) => updateBlock(i, 'file', e.target.files?.[0] || null)}
              />
              {b.file && <p className="text-xs text-gray-500">Selected: {b.file.name}</p>}
              {typeof b.value === 'string' && b.value && (
                <img src={`/storage/${b.value}`} alt="" className="h-24 rounded object-cover" />
              )}
            </div>
          )}

          {b.type === 'gallery' && (
            <div className="space-y-2">
              <input
                type="file"
                accept="image/*"
                multiple
                onChange={(e) => {
                  // Guardamos en un array auxiliar para enviar
                  updateBlock(i, 'newFiles', Array.from(e.target.files || []));
                }}
              />
              <div className="flex flex-wrap gap-2">
                {(Array.isArray(b.value) ? b.value : []).map((p, idx) => (
                  <img key={idx} src={`/storage/${p}`} className="h-16 w-24 object-cover rounded" />
                ))}
              </div>
            </div>
          )}

          {b.type === 'youtube' && (
            <div className="grid gap-2">
              <input
                type="text"
                value={b.title || ''}
                onChange={(e) => updateBlock(i, 'title', e.target.value)}
                className="w-full border rounded p-2"
                placeholder="Block title (optional)"
              />
              <input
                type="text"
                value={b.value || ''}
                onChange={(e) => updateBlock(i, 'value', e.target.value)}
                className="w-full border rounded p-2"
                placeholder="YouTube URL or ID"
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
