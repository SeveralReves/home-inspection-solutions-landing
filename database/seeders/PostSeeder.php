<?php

namespace Database\Seeders;

use App\Models\Post;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class PostSeeder extends Seeder
{
    public function run()
    {
        $posts = [
            [
                'title' => 'General Home Inspection for Single-Family House',
                'excerpt' => 'We identified moisture leaks and outdated electrical systems in a 1970s home.',
                'category' => 'General Inspection',
                'published_at' => now()->subDays(2),
                'cover' => 'posts/home-inspection.jpg',
                'content' => [
                    ['type' => 'text', 'value' => '<p>The client requested an inspection before purchasing the property. Moisture issues and outdated wiring were found.</p>'],
                    ['type' => 'image', 'value' => 'posts/moisture-roof.jpg'],
                    ['type' => 'gallery', 'value' => ['posts/wiring1.jpg', 'posts/wiring2.jpg']]
                ]
            ],
            [
                'title' => 'Structural Review After Light Earthquake',
                'excerpt' => 'We assessed potential structural damage to load-bearing walls and foundations after a mild earthquake.',
                'category' => 'Structural Evaluation',
                'published_at' => now()->subDays(5),
                'cover' => 'posts/structural-review.jpg',
                'content' => [
                    ['type' => 'text', 'value' => '<p>Cracks due to settlement were identified, and reinforcement of key columns was recommended.</p>'],
                    ['type' => 'image', 'value' => 'posts/cracks.jpg'],
                    ['type' => 'text', 'value' => '<p>Beams were also assessed and no major damage was found.</p>']
                ]
            ],
            [
                'title' => 'Technical Report for Property Sale',
                'excerpt' => 'We delivered a comprehensive technical report to support the client in selling their property.',
                'category' => 'Technical Report',
                'published_at' => now()->subDays(10),
                'cover' => 'posts/technical-report.jpg',
                'content' => [
                    ['type' => 'text', 'value' => 'The report included roof inspection, drainage system, and evaluations of the electrical and plumbing systems.'],
                    ['type' => 'gallery', 'value' => ['posts/roof1.jpg', 'posts/drainage1.jpg']]
                ]
            ],
            [
                'title' => 'Pre-Purchase Inspection for Apartment',
                'excerpt' => 'Full apartment inspection performed before client completed their purchase.',
                'category' => 'Pre-Purchase Inspection',
                'published_at' => now()->subDays(15),
                'cover' => 'posts/prepurchase-inspection.jpg',
                'content' => [
                    ['type' => 'text', 'value' => 'Minor leaks and poor bathroom ventilation were noted, but no critical structural issues were found.'],
                    ['type' => 'image', 'value' => 'posts/bathroom-leak.jpg'],
                ]
            ],
        ];

        foreach ($posts as $post) {
            Post::create([
                'title' => $post['title'],
                'slug' => Str::slug($post['title']),
                'excerpt' => $post['excerpt'],
                'category' => $post['category'],
                'published_at' => $post['published_at'],
                'cover' => $post['cover'],
                'content' => json_encode($post['content']),
            ]);
        }
    }
}
