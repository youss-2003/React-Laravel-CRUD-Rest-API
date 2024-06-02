<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Exam;

class StudentController extends Controller
{
    public function getStudentExams(Request $request)
    {
        $student = auth()->user();
        $exams = Exam::where('student_id', $student->id)->with('subject')->get();

        return response()->json([
            'student' => $student,
            'exams' => $exams,
        ]);
    }
}
