<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PostController extends Controller
{
  public function paginate(Request $request)
    {
        $perPage = (int) $request->get('per_page', 6);
        $query = Post::orderByDesc('published_at')->orderByDesc('created_at');

        // Si quieres permitir filtro por categoría, opcional:
        if ($request->filled('category')) {
            $query->where('category', $request->get('category'));
        }

        return $query->paginate($perPage);
    }
  public function latest()
  {
      return Post::latest('published_at')->take(6)->get(); // 6 para mostrar en slider
  }
}
