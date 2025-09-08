<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Requests\PostStoreRequest;
use App\Http\Requests\PostUpdateRequest;
use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Inertia\Inertia;

class PostAdminController extends Controller
{
    public function index()
    {
        return Inertia::render('Dashboard/Posts/Index', [
            'posts' => Post::orderByDesc('published_at')->orderByDesc('created_at')->paginate(10),
        ]);
    }

    public function create()
    {
        return Inertia::render('Dashboard/Posts/Create');
    }

    public function store(PostStoreRequest $request)
    {
        $data = $request->validated();

        // Cover
        $coverPath = $request->hasFile('cover')
            ? $request->file('cover')->store('posts', 'public')
            : null;

        // Content: aceptar string o array
        $rawContent = $data['content'] ?? [];
        if (is_string($rawContent)) {
            $content = json_decode($rawContent, true) ?? [];
        } elseif (is_array($rawContent)) {
            $content = $rawContent;
        } else {
            $content = [];
        }

        // Procesar imágenes dentro de bloques (image / gallery)
        $content = $this->processBlocksUploads($content, $request);

        $post = Post::create([
            'title'        => $data['title'],
            'slug'         => !empty($data['slug'])
                ? Str::slug($data['slug'])
                : Str::slug($data['title']),
            'excerpt'      => $data['excerpt'] ?? null,
            'category'     => $data['category'] ?? null,
            'published_at' => $data['published_at'] ?? now(),
            'cover'        => $coverPath,
            'content'      => $content, // eloquent cast a array/json
        ]);

        return redirect()->route('admin.posts.index')
            ->with('success', 'Post created');
    }


    public function edit(Post $post)
    {
        return Inertia::render('Dashboard/Posts/Edit', [
            'post' => $post, // content está casteado a array en el modelo
        ]);
    }

  public function update(PostUpdateRequest $request, Post $post)
    {
        $data = $request->validated();

        // Cover
        if ($request->hasFile('cover')) {
            if ($post->cover) {
                Storage::disk('public')->delete($post->cover);
            }
            $post->cover = $request->file('cover')->store('posts', 'public');
        }

        // Content: aceptar string o array
        $rawContent = $data['content'] ?? [];
        if (is_string($rawContent)) {
            $content = json_decode($rawContent, true) ?? [];
        } elseif (is_array($rawContent)) {
            $content = $rawContent;
        } else {
            $content = [];
        }

        
        // Si tienes uploads embebidos en los bloques
        $content = $this->processBlocksUploads($content, $request);

        $post->title        = $data['title'];
        $post->slug         = !empty($data['slug']) ? Str::slug($data['slug']) : Str::slug($data['title']);
        $post->excerpt      = $data['excerpt'] ?? null;
        $post->category     = $data['category'] ?? null;
        $post->published_at = $data['published_at'] ?? $post->published_at; // si necesitas, castea a Carbon
        $post->content      = $content;

        $post->save();

        return redirect()->route('admin.posts.index')->with('success', 'Post updated');
    }

    public function destroy(Post $post)
    {
        if ($post->cover) Storage::disk('public')->delete($post->cover);

        // Opcional: borrar imágenes referenciadas en content (si deseas, recórrelas)
        // foreach ($post->content ?? [] as $block) { ... Storage::delete($path) ... }

        $post->delete();

        return back()->with('success', 'Post deleted');
    }

    /**
     * Guarda archivos que vengan incrustados en los bloques.
     * Espera en el FormData nombres como:
     * - content_files[INDEX] para type=image
     * - content_files_gallery[INDEX][] para type=gallery
     */
    protected function processBlocksUploads(array $content, Request $request): array
    {
        // Forma "plana" (lo que esperabas)
        $imageFilesFlat   = $request->file('content_files', []);            // [i => UploadedFile]
        $galleryFilesFlat = $request->file('content_files_gallery', []);    // [i => [k => UploadedFile]]

        // Forma "anidada" (lo que está llegando)
        $nested = $request->file('content', []); // [i => ['file' => UploadedFile, 'newFiles' => [UploadedFile,...]]]

        foreach ($content as $i => $block) {
            $type = $block['type'] ?? null;

            if ($type === 'image') {
                // Prioridad: plano, si no, anidado
                $file = $imageFilesFlat[$i] ?? ($nested[$i]['file'] ?? null);

                if ($file instanceof \Illuminate\Http\UploadedFile && $file->isValid()) {
                    $path = $file->store('posts', 'public');
                    $content[$i]['value'] = $path;
                } else {
                    // Mantén el value previo si ya existía; evita forzar null
                    $content[$i]['value'] = $content[$i]['value'] ?? null;
                }
            }

            if ($type === 'gallery') {
                $current = is_array($block['value'] ?? null) ? $block['value'] : [];

                // Reemplazos por índice (plano)
                if (isset($galleryFilesFlat[$i]) && is_array($galleryFilesFlat[$i])) {
                    foreach ($current as $k => $val) {
                        $file = $galleryFilesFlat[$i][$k] ?? null;
                        if ($file instanceof \Illuminate\Http\UploadedFile && $file->isValid()) {
                            $current[$k] = $file->store('posts', 'public');
                        }
                    }
                    // Nuevos al final
                    foreach ($galleryFilesFlat[$i] as $k => $file) {
                        if (!array_key_exists($k, $current) && $file instanceof \Illuminate\Http\UploadedFile && $file->isValid()) {
                            $current[] = $file->store('posts', 'public');
                        }
                    }
                }

                // Forma anidada para galería (si tu editor la envía como content[i][newFiles][])
                if (isset($nested[$i]['newFiles']) && is_array($nested[$i]['newFiles'])) {
                    foreach ($nested[$i]['newFiles'] as $file) {
                        if ($file instanceof \Illuminate\Http\UploadedFile && $file->isValid()) {
                            $current[] = $file->store('posts', 'public');
                        }
                    }
                }

                $content[$i]['value'] = $current;
            }
        }

        return $content;
    }


}
