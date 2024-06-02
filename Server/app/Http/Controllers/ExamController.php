<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\Exam;
use App\Models\Subject;

class ExamController extends Controller
{
    public function index()
    {
        $user = Auth::user();
        $student = $user->student;
        $exams = $student->exams()->with('subject')->get();

        return response()->json([
            'student' => $student,
            'exams' => $exams
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'subject_id' => 'required|exists:subjects,id',
            'exam_type' => 'required|string',
            'score' => 'required|integer',
        ]);

        $user = Auth::user();
        $student = $user->student;

        $exam = new Exam([
            'student_id' => $student->id,
            'subject_id' => $request->subject_id,
            'exam_type' => $request->exam_type,
            'score' => $request->score,
        ]);

        $exam->save();

        return response()->json(['exam' => $exam], 201);
    }

    public function update(Request $request, Exam $exam)
    {
        $request->validate([
            'subject_id' => 'required|exists:subjects,id',
            'exam_type' => 'required|string',
            'score' => 'required|integer',
        ]);

        $exam->update([
            'subject_id' => $request->subject_id,
            'exam_type' => $request->exam_type,
            'score' => $request->score,
        ]);

        return response()->json(['exam' => $exam], 200);
    }

    public function destroy(Exam $exam)
    {
        $exam->delete();
        return response()->json(null, 204);
    }
}

