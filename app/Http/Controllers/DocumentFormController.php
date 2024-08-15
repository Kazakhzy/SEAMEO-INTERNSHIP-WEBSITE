<?php

namespace App\Http\Controllers;

use App\Models\Document;
use App\Models\Languages;
use App\Models\UserSkills;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Str;

class DocumentFormController extends Controller
{
    public function index()
    {
        $documents = Document::where('id_user', auth()->user()->id)->first();
        $languages = []; // Fetch languages data from your database
        if ($documents != null) {
            return redirect(route('document.done'));
        }
        return Inertia::render('Dashboard/Document-form/Index', compact('documents', 'languages'));
    }
    public function done()
    {
        $documents = Document::where('id_user', auth()->user()->id)->first();
        $languages_id = Languages::where('id_user', auth()->user()->id)->first();
        $user_skills = UserSkills::where('id_user', auth()->user()->id)->first();

        // Merge all that
        $documents = $documents ? array_merge($documents->toArray(), $languages_id->toArray(), $user_skills->toArray()) : [];

        // dd($documents);

        $languages = []; // Fetch languages data from your database

        if ($documents == null) {
            return redirect(route('document.form'));
        }

        return Inertia::render('Dashboard/Document-form/Done', compact('documents', 'languages'));
    }



    public function store(Request $request)
    {

        // Validate the request
        $request->validate([
            'id_user' => 'required|string|max:255',
            'cv' => 'required|mimes:pdf|max:2048',
            'portfolio_certificate' => 'nullable|mimes:pdf|max:2048',
            'incomplete_studies' => 'required|mimes:pdf|max:2048',
            'letter_commitment' => 'required|mimes:pdf|max:2048',
            'letter_non_participant' => 'required|mimes:pdf|max:2048',
            'health_insurance' => 'nullable|mimes:pdf|max:2048',
            'passport' => 'nullable|mimes:pdf|max:2048',
            'letter_recommendation' => 'required|mimes:pdf|max:2048',
            'language_1' => 'required',
            'speak_language_1' => 'required',
            'read_language_1' => 'required',
            'write_language_1' => 'required',
            'understand_language_1' => 'required',
            'name_academic' => 'required',
            'preferred_date' => 'required|max:255',
            'reason_interest' => 'required|max:255',
            'topic_interested' => 'required|max:255',
            'preferred_nature' => 'required|max:255',
            'specific_skills' => 'required|max:255',
            'expected_output' => 'required|max:255',
            'current_source' => 'required|max:255',
        ]);


        // Array of file fields to handle
        $fileFields = [
            'cv',
            'portfolio_certificate',
            'incomplete_studies',
            'letter_commitment',
            'letter_non_participant',
            'health_insurance',
            'passport',
            'letter_recommendation'
        ];

        // Collect file paths
        $filePaths = [];

        foreach ($fileFields as $field) {
            if ($request->hasFile($field)) {
                $file = $request->file($field);

                if ($file) {
                    $fileName = Str::random(80) . '.' . $file->getClientOriginalExtension();
                    $filePath = 'files/DocumentForms/' . ucfirst($field) . '/' . $fileName;

                    // Move the file to the designated folder
                    $file->move(public_path('files/DocumentForms/' . ucfirst($field)), $fileName);

                    // Store the file path
                    $filePaths[$field] = $filePath;
                } else {
                    return back()->with('error', "File upload failed for $field");
                }
            } else {
                $filePaths[$field] = null;
            }
        }

        // Store document data in the documents table
        $document = Document::create([
            'id_user' => $request->id_user,
            'cv' => $filePaths['cv'] ?? null,
            'portfolio_certificate' => $filePaths['portfolio_certificate'] ?? null,
            'incomplete_studies' => $filePaths['incomplete_studies'] ?? null,
            'letter_commitment' => $filePaths['letter_commitment'] ?? null,
            'letter_non_participant' => $filePaths['letter_non_participant'] ?? null,
            'health_insurance' => $filePaths['health_insurance'] ?? null,
            'passport' => $filePaths['passport'] ?? null,
            'letter_recommendation' => $filePaths['letter_recommendation'] ?? null,
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        // Store language skills in the languages table
        Languages::create([
            'id_user' => $request->id_user,
            'language_1' => $request->language_1,
            'speak_language_1' => $request->speak_language_1,
            'read_language_1' => $request->read_language_1,
            'write_language_1' => $request->write_language_1,
            'understand_language_1' => $request->understand_language_1,
            'language_2' => $request->language_2 ?? null,
            'speak_language_2' => $request->speak_language_2 ?? null,
            'read_language_2' => $request->read_language_2 ?? null,
            'write_language_2' => $request->write_language_2 ?? null,
            'understand_language_2' => $request->understand_language_2 ?? null,
            'language_3' => $request->language_3 ?? null,
            'speak_language_3' => $request->speak_language_3 ?? null,
            'read_language_3' => $request->read_language_3 ?? null,
            'write_language_3' => $request->write_language_3 ?? null,
            'understand_language_3' => $request->understand_language_3 ?? null,
        ]);

        // Store user skills in the user_skills table
        UserSkills::create([
            'id_user' => $request->id_user,
            'computer_skills' => $request->computer_skills,
            'name_academic' => $request->name_academic,
            'preferred_date' => $request->preferred_date,
            'reason_interest' => $request->reason_interest,
            'topic_interested' => $request->topic_interested,
            'preferred_nature' => $request->preferred_nature,
            'specific_skills' => $request->specific_skills,
            'expected_output' => $request->expected_output,
            'current_source' => $request->current_source,
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        return redirect('/document-form-done')->with('success', 'Document form submitted successfully!');
    }


    public function update(Request $request)
    {
        // Validate the incoming request
        $request->validate([
            'id_user' => 'required|string|max:255',
            'cv' => 'nullable|mimes:pdf|max:2048',
            'portfolio_certificate' => 'nullable|mimes:pdf|max:2048',
            'incomplete_studies' => 'nullable|mimes:pdf|max:2048',
            'letter_commitment' => 'nullable|mimes:pdf|max:2048',
            'letter_non_participant' => 'nullable|mimes:pdf|max:2048',
            'health_insurance' => 'nullable|mimes:pdf|max:2048',
            'passport' => 'nullable|mimes:pdf|max:2048',
            'letter_recommendation' => 'nullable|mimes:pdf|max:2048',
            'language_1' => 'required',
            'speak_language_1' => 'required',
            'read_language_1' => 'required',
            'write_language_1' => 'required',
            'understand_language_1' => 'required',
            'name_academic' => 'required',
            'preferred_date' => 'required|max:255',
            'reason_interest' => 'required|max:255',
            'topic_interested' => 'required|max:255',
            'preferred_nature' => 'required|max:255',
            'specific_skills' => 'required|max:255',
            'expected_output' => 'required|max:255',
            'current_source' => 'required|max:255',
        ]);


        // Array of file fields to handle
        $fileFields = [
            'cv',
            'portfolio_certificate',
            'incomplete_studies',
            'letter_commitment',
            'letter_non_participant',
            'health_insurance',
            'passport',
            'letter_recommendation'
        ];

        $documentForm = Document::where('id_user', $request->id_user)->first();
        $filePaths = [];

        foreach ($fileFields as $field) {
            if ($request->hasFile($field)) {
                $file = $request->file($field);

                if ($file) {
                    // Delete the old file if it exists
                    if ($documentForm->$field && file_exists(public_path($documentForm->$field))) {
                        unlink(public_path($documentForm->$field));
                    }

                    // Generate a new file name and path
                    $fileName = Str::random(80) . '.' . $file->getClientOriginalExtension();
                    $filePath = 'files/DocumentForms/' . ucfirst($field) . '/' . $fileName;

                    // Move the file to the designated folder
                    $file->move(public_path('files/DocumentForms/' . ucfirst($field)), $fileName);

                    // Store the new file path
                    $filePaths[$field] = $filePath;
                } else {
                    return back()->with('error', "File upload failed for $field");
                }
            } else {
                // Retain the existing file path if no new file is uploaded
                $filePaths[$field] = $documentForm->$field;
            }
        }

        // Update document data in the documents table
        $documentForm->fill([
            'cv' => $filePaths['cv'],
            'portfolio_certificate' => $filePaths['portfolio_certificate'],
            'incomplete_studies' => $filePaths['incomplete_studies'],
            'letter_commitment' => $filePaths['letter_commitment'],
            'letter_non_participant' => $filePaths['letter_non_participant'],
            'health_insurance' => $filePaths['health_insurance'],
            'passport' => $filePaths['passport'],
            'letter_recommendation' => $filePaths['letter_recommendation'],
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        $documentForm->save();

        // Update language skills in the languages table
        $language = Languages::where('id_user', $request->id_user)->first();
        $language->update([
            'language_1' => $request->language_1,
            'speak_language_1' => $request->speak_language_1,
            'read_language_1' => $request->read_language_1,
            'write_language_1' => $request->write_language_1,
            'understand_language_1' => $request->understand_language_1,
            'language_2' => $request->language_2,
            'speak_language_2' => $request->speak_language_2,
            'read_language_2' => $request->read_language_2,
            'write_language_2' => $request->write_language_2,
            'understand_language_2' => $request->understand_language_2,
            'language_3' => $request->language_3,
            'speak_language_3' => $request->speak_language_3,
            'read_language_3' => $request->read_language_3,
            'write_language_3' => $request->write_language_3,
            'understand_language_3' => $request->understand_language_3,
            'updated_at' => now(),
        ]);

        // Update user skills in the user_skills table
        $userSkill = UserSkills::where('id_user', $request->id_user)->first();
        $userSkill->update([
            'computer_skills' => $request->computer_skills,
            'name_academic' => $request->name_academic,
            'preferred_date' => $request->preferred_date,
            'reason_interest' => $request->reason_interest,
            'topic_interested' => $request->topic_interested,
            'preferred_nature' => $request->preferred_nature,
            'specific_skills' => $request->specific_skills,
            'expected_output' => $request->expected_output,
            'current_source' => $request->current_source,
            'updated_at' => now(),
        ]);

        return back()->with('success', 'Document form updated successfully');
    }
}
