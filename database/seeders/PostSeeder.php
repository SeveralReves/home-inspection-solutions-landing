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
            // [
            //     'title' => 'General Home Inspection for Single-Family House',
            //     'excerpt' => 'We identified moisture leaks and outdated electrical systems in a 1970s home.',
            //     'category' => 'General Inspection',
            //     'published_at' => now()->subDays(2),
            //     'cover' => 'posts/home-inspection.jpg',
            //     'content' => [
            //         ['type' => 'title', 'value' => 'General Home Inspection for Single-Family House'],
            //         ['type' => 'text', 'value' => '<p>The client requested an inspection before purchasing the property. Moisture issues and outdated wiring were found.</p>'],
            //         ['type' => 'image', 'value' => 'posts/moisture-roof.jpg'],
            //         ['type' => 'title', 'value' => 'Gallery'],
            //         ['type' => 'gallery', 'value' => ['posts/wiring1.jpg', 'posts/wiring2.jpg','posts/wiring3.jpg']]
            //     ]
            // ],
            // [
            //     'title' => 'Structural Review After Light Earthquake',
            //     'excerpt' => 'We assessed potential structural damage to load-bearing walls and foundations after a mild earthquake.',
            //     'category' => 'Structural Evaluation',
            //     'published_at' => now()->subDays(5),
            //     'cover' => 'posts/structural-review.jpg',
            //     'content' => [
            //         ['type' => 'text', 'value' => '<p>Cracks due to settlement were identified, and reinforcement of key columns was recommended.</p>'],
            //         ['type' => 'image', 'value' => 'posts/cracks.jpg'],
            //         ['type' => 'text', 'value' => '<p>Beams were also assessed and no major damage was found.</p>']
            //     ]
            // ],
            // [
            //     'title' => 'Fence Repair for Suburban Home',
            //     'excerpt' => 'Repaired a damaged wooden fence after a storm in a suburban neighborhood.',
            //     'category' => 'Handyman',
            //     'published_at' => now()->subDays(5),
            //     'cover' => 'posts/fence-repair.jpg',
            //     'content' => [
            //         ['type' => 'text', 'value' => '<p>Our handyman team replaced broken planks, reinforced posts, and applied a fresh coat of weatherproof paint for long-lasting durability.</p>'],
            //         ['type' => 'image', 'value' => 'posts/fence-repair.jpg'],
            //         ['type' => 'text', 'value' => '<p>Our handyman team replaced broken planks, reinforced posts, and applied a fresh coat of weatherproof paint for long-lasting durability.</p>
            //             <p><strong>Key improvements:</strong></p>
            //             <ul>
            //                 <li>Replaced 10 broken wooden planks.</li>
            //                 <li>Reinforced 4 support posts.</li>
            //                 <li>Applied a weatherproof coat to prevent further damage.</li>
            //             </ul>']
            //     ],
            // ],
            // [
            //     'title' => 'Interior Door Installation Project',
            //     'excerpt' => 'Installed new custom-fit doors for improved home privacy and aesthetics.',
            //     'category' => 'Handyman',
            //     'published_at' => now()->subDays(5),
            //     'cover' => 'posts/door-installation.jpg',
            //     'content' => [
            //         ['type' => 'title', 'value' => '<We installed three modern doors with brushed metal hardware'],
            //         ['type' => 'image', 'value' => 'posts/door-installation.jpg'],
            //         ['type' => 'text', 'value' => '<p>Our handyman team replaced broken planks, reinforced posts, and applied a fresh coat of weatherproof paint for long-lasting durability.</p>
            //             <p><strong>Key improvements:</strong></p>
            //             <ul>
            //                 <li>Replaced 10 broken wooden planks.</li>
            //                 <li>Reinforced 4 support posts.</li>
            //                 <li>Applied a weatherproof coat to prevent further damage.</li>
            //             </ul>']
            //     ],
            // ],
            // 🔥 NEW: 4 extra posts

            [
                'title' => 'Attic Insulation & Ventilation Check',
                'excerpt' => 'Inspection of attic insulation depth, thermal bridging, and ventilation paths for energy efficiency.',
                'category' => 'Energy Inspection',
                'published_at' => now()->subDays(4),
                'cover' => 'posts/attic-inspection.jpg',
                'content' => [
                    ['type' => 'title', 'value' => 'Attic Insulation & Ventilation'],
                    ['type' => 'text', 'value' => '<p>We verified insulation depth against local standards and ensured ventilation baffles were clear. Thermal camera used to spot cold bridges.</p>'],
                    ['type' => 'youtube', 'title' => 'Attic Walkthrough', 'value' => 'https://youtu.be/dQw4w9WgXcQ'],
                ],
            ],
            [
                'title' => 'Mold Assessment and Remediation Report',
                'excerpt' => 'Identified moisture sources and recommended remediation steps for mold-prone areas.',
                'category' => 'Mold Inspection',
                'published_at' => now()->subDays(3),
                'cover' => 'posts/mold-cover.jpg',
                'content' => [
                    ['type' => 'text', 'value' => '<p>Moisture readings were taken across baseboards and behind cabinets. Recommendations included dehumidification and targeted remediation.</p>'],
                    ['type' => 'gallery', 'value' => ['posts/mold1.jpg', 'posts/mold2.jpg', 'posts/mold3.jpg']],
                ],
            ],
            [
                'title' => 'Deck Restoration & Reinforcement',
                'excerpt' => 'Handyman project to restore a backyard deck with structural reinforcement and new stain.',
                'category' => 'Handyman',
                'published_at' => now()->subDays(2),
                'cover' => 'posts/deck-restore.jpg',
                'content' => [
                    ['type' => 'title', 'value' => 'Deck Restoration'],
                    ['type' => 'text', 'value' => '<p>Replaced rotted boards, tightened fasteners, and applied exterior-grade stain to extend lifespan.</p>'],
                    ['type' => 'youtube', 'title' => 'Time-lapse', 'value' => 'https://www.youtube.com/watch?v=Zi_XLOBDo_Y'],
                ],
            ],
            [
                'title' => 'Leak Detection & Plumbing Fix',
                'excerpt' => 'Detected hidden leaks using moisture meters and fixed faulty connections under the sink.',
                'category' => 'Handyman',
                'published_at' => now()->subDay(),
                'cover' => 'posts/plumbing-leak.jpg',
                'content' => [
                    ['type' => 'text', 'value' => '<p>We used moisture meters and thermal imaging to locate hidden leaks, then replaced faulty P-trap and fittings.</p>'],
                    ['type' => 'image', 'value' => 'posts/plumbing-leak.jpg'],
                ],
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
