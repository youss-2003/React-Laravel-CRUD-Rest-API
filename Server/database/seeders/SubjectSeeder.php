<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Subject;

class SubjectSeeder extends Seeder
{
    public function run()
    {
        $subjects = ['Management de projets', 'Anglais', 'Deploiement application', 'Securite informatique', 'Dev mobile', 'SGBD', 'Coaching', 'Backend'];

        foreach ($subjects as $subject) {
            Subject::create(['name' => $subject]);
        }
    }
}
