<?php

namespace App\Http\Controllers;

use App\Models\EducationDropdowns;
use App\Models\UserProfile;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Str;

class ProfileFormController extends Controller
{
    public function index()
    {
        $profile = UserProfile::where('id_user', auth()->user()->id)->first();

        $education = EducationDropdowns::first();

        if (isset($profile->reset_form)) {
            if ($profile->reset_form == "yes") {
                return redirect(route('profile-form.reset'));
            }
        }


        return Inertia::render('Dashboard/Profile-form/Index', compact('profile', 'education'));
    }

    public function reset()
    {
        $profile = UserProfile::where('id_user', auth()->user()->id)->first();
        $education = EducationDropdowns::first();

        if ($profile->reset_form == "no") {
            return redirect(route('profile.form'));
        }
        return Inertia::render('Dashboard/Profile-form/Reset', compact('profile', 'education'));
    }

    public function reset_update(Request $request)
    {
        $request->validate([
            'id_user' => 'required|string|max:255',
            'profil' => 'nullable|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'place_birth' => 'required|string|max:255',
            'date_birth' => 'required|date',
            'gender' => 'required|string|max:255',
            'nik_passport' => 'required|string|max:255',
            'school_university' => 'required|string|max:255',
            'nim_student' => 'required|string|max:255',
            'education' => 'required|string|max:255',
            'religion' => 'required|string|max:255',
            'address_id' => 'required|string|max:255',
            'phone' => 'required|string|max:255',
        ]);
        // Handle file upload
        if ($request->hasFile('profil')) {
            $file = $request->file('profil');

            if ($file) {
                $fileName = Str::random(80) . '.' . $file->getClientOriginalExtension();
                $filePath = 'files/ProfileForms/Profil/' . $fileName;

                // Move the file to the designated folder
                $file->move(public_path('files/ProfileForms/Profil'), $fileName);
            } else {
                return back()->with('error', 'File upload failed');
            }
        } else {
            $profileForm = UserProfile::where('id_user', $request->id_user)->first();
            $filePath = $profileForm->profil;;
        }

        // Find the profile form entry by id_user and update it
        $profileForm = UserProfile::where('id_user', $request->id_user)->first();
        if ($profileForm) {
            $profileForm->update([
                'profil' => $filePath,
                'place_birth' => $request->place_birth,
                'date_birth' => $request->date_birth,
                'gender' => $request->gender,
                'nik_passport' => $request->nik_passport,
                'nim_student' => $request->nim_student,
                'school_university' => $request->school_university,
                'education' => $request->education,
                'religion' => $request->religion,
                'address_id' => $request->address_id,
                'phone' => $request->phone,
                'reset_form' => 'no',
                'updated_at' => now(),
            ]);
        } else {
            return back()->with('error', 'Profile not found');
        }

        return back()->with('success', 'Profile updated successfully!');
    }

    public function update_reset_form($id)
    {
        $profile = UserProfile::where('id_user', $id)->first();
        // dd($profile->reset_form);
        if ($profile->reset_form == "yes") {
            $profile->update([
                'reset_form' => 'no',
                'updated_at' => now(),
            ]);
        } else {
            $profile->update([
                'reset_form' => 'yes',
                'updated_at' => now(),
            ]);
        }


        return back()->with('success', 'Profile updated successfully!');
    }

    public function store(Request $request)
    {
        $request->validate([
            'id_user' => 'required|string|max:255',
            'profil' => 'required|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'place_birth' => 'required|string|max:255',
            'date_birth' => 'required|date',
            'gender' => 'required|string|max:255',
            'nik_passport' => 'required',
            'school_university' => 'required',
            'nim_student' => 'required',
            'education' => 'required|string|max:255',
            'religion' => 'required|string|max:255',
            'address_id' => 'required',
            'phone' => 'required',
        ]);

        // Handle file upload
        if ($request->hasFile('profil')) {
            $file = $request->file('profil');

            if ($file) {
                $fileName = Str::random(80) . '.' . $file->getClientOriginalExtension();
                $filePath = 'files/ProfileForms/Profil/' . $fileName;

                // Move the file to the designated folder
                $file->move(public_path('files/ProfileForms/Profil'), $fileName);
            } else {
                return back()->with('error', 'File upload failed');
            }
        } else {
            $filePath = null;
        }

        // Insert data into the database
        UserProfile::create([
            'id_user' => $request->id_user,
            'profil' => $filePath,
            'place_birth' => $request->place_birth,
            'date_birth' => $request->date_birth,
            'gender' => $request->gender,
            'nik_passport' => $request->nik_passport,
            'school_university' => $request->school_university,
            'nim_student' => $request->nim_student,
            'education' => $request->education,
            'religion' => $request->religion,
            'address_id' => $request->address_id,
            'phone' => $request->phone,
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        return back()->with('success', 'Profile updated successfully!');
    }
}
