<?php

namespace App\Http\Controllers;

use App\Models\Post;
class PostController extends Controller
{
  public function latest()
  {
      return Post::latest('published_at')->take(6)->get(); // 6 para mostrar en slider
  }
}
