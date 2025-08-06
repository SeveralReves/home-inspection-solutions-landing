<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Models\Message;
use App\Http\Controllers\PostController;
use App\Models\Post;
use Illuminate\Support\Facades\Artisan;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/run-commands', function () {
    // Ejecutar migraciones
    Artisan::call('migrate');

    // Ejecutar el seeder de los posts
    Artisan::call('db:seed', ['--class' => 'PostSeeder']);

    // Crear el enlace simbólico para el almacenamiento
    Artisan::call('storage:link');
    
    return 'Comandos ejecutados exitosamente!';
});

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
        'meta_description' => 'Home Inspections & Solutions is your go-to provider in Valdosta, GA for professional handyman services and comprehensive home inspections. From small home repairs to pre-purchase inspections, we deliver quality and reliability you can trust. Get your free estimate now!',
        'posts' => Post::latest('published_at')->take(6)->get(), // ✅ Envía los últimos 6 posts

    ]);
});
Route::get('/privacy-policy', function () {
    return Inertia::render('Privacy', [
        'meta_description' => 'Learn how Home Inspections & Solutions protects your personal information. Read our privacy policy for details on data collection, usage, and security.'
    ]);
});

Route::get('/dashboard', function () {
    $messages = Message::all();
    return Inertia::render('Dashboard',[
        'messages' => $messages
    ]);
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::fallback(function () {
    return Inertia::render('NotFound',[
         'meta_description' => 'Page not found. The link you followed may be broken, or the page may have been removed. Please check the URL or use our site navigation.'
    ]);
});



Route::get('/api/posts/latest', [PostController::class, 'latest']);

Route::get('/posts/{slug}', function ($slug) {
    $post = Post::where('slug', $slug)->firstOrFail();
    $post->content = json_decode($post->content);
    
    // Obtener los últimos 6 posts, excluyendo el post actual
    $posts = Post::latest('published_at')
                ->where('slug', '!=', $slug) // Excluir el post actual
                ->take(6)
                ->get();
    
    return Inertia::render('Posts/Show', [
        'post' => $post,
        'posts' => $posts, // ✅ Ahora los últimos 6 posts excluyen el actual
    ]);
})->name('posts.show');


// Route::get('/robots.txt', function () {
//     $content = "User-agent: *\nDisallow:";
//     return Response::make($content, 200, ['Content-Type' => 'text/plain']);
// });

require __DIR__.'/auth.php';
