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
                    ['type' => 'title', 'value' => 'General Home Inspection for Single-Family House'],
                    ['type' => 'text', 'value' => '<p>The client requested an inspection before purchasing the property. Moisture issues and outdated wiring were found.</p>'],
                    ['type' => 'image', 'value' => 'posts/moisture-roof.jpg'],
                    ['type' => 'title', 'value' => 'Gallery'],
                    ['type' => 'gallery', 'value' => ['posts/wiring1.jpg', 'posts/wiring2.jpg','posts/wiring3.jpg']]
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
                'title' => 'Fence Repair for Suburban Home',
                'excerpt' => 'Repaired a damaged wooden fence after a storm in a suburban neighborhood.',
                'category' => 'Handyman',
                'published_at' => now()->subDays(5),
                'cover' => 'posts/fence-repair.jpg',
                'content' => [
                    ['type' => 'text', 'value' => '<p>Our handyman team replaced broken planks, reinforced posts, and applied a fresh coat of weatherproof paint for long-lasting durability.</p>'],
                    ['type' => 'image', 'value' => 'posts/fence-repair.jpg'],
                    ['type' => 'text', 'value' => '<p>Our handyman team replaced broken planks, reinforced posts, and applied a fresh coat of weatherproof paint for long-lasting durability.</p>
                        <p><strong>Key improvements:</strong></p>
                        <ul>
                            <li>Replaced 10 broken wooden planks.</li>
                            <li>Reinforced 4 support posts.</li>
                            <li>Applied a weatherproof coat to prevent further damage.</li>
                        </ul>']
                ],
            ],
            [
                'title' => 'Interior Door Installation Project',
                'excerpt' => 'Installed new custom-fit doors for improved home privacy and aesthetics.',
                'category' => 'Handyman',
                'published_at' => now()->subDays(5),
                'cover' => 'posts/door-installation.jpg',
                'content' => [
                    ['type' => 'title', 'value' => '<We installed three modern doors with brushed metal hardware'],
                    ['type' => 'image', 'value' => 'posts/door-installation.jpg'],
                    ['type' => 'text', 'value' => '<p>Our handyman team replaced broken planks, reinforced posts, and applied a fresh coat of weatherproof paint for long-lasting durability.</p>
                        <p><strong>Key improvements:</strong></p>
                        <ul>
                            <li>Replaced 10 broken wooden planks.</li>
                            <li>Reinforced 4 support posts.</li>
                            <li>Applied a weatherproof coat to prevent further damage.</li>
                        </ul>']
                ],
            ]
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
