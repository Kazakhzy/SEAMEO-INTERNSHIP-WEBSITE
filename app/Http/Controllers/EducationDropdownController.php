<?php

namespace App\Http\Controllers;

use App\Models\EducationDropdowns;
use Illuminate\Http\Request;
use Inertia\Inertia;

class EducationDropdownController extends Controller
{
    public function index()
    {
        $education = EducationDropdowns::first();
        return Inertia::render('Dashboard/Education/Index', compact('education'));
    }

    public function store(Request $request)
    {

        $request->validate([
            'education' => 'required|string|max:255',
        ]);

        $data = EducationDropdowns::first();

        if ($data) {
            EducationDropdowns::updateOrCreate(
                ['id' => $data->id], // Attributes to search for
                ['education' => $request->education]  // Values to update or create
            );
        } else {
            EducationDropdowns::create([
                'education' => $request->education
            ]);
        }



        return redirect()->back()->with('success', 'Berhasil!');
    }
}
