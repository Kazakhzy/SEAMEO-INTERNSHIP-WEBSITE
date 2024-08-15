<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;

class AdminController extends Controller
{
    public function index()
    {
        $admin = User::where('level', 'admin')->paginate(10);

        return Inertia::render('Dashboard/Admin/Index', compact('admin'));
    }



    public function destroy($id)
    {
        $admin = User::find($id);
        $admin->delete();
        return redirect()->back();
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|lowercase|email|max:255|unique:' . User::class,
            'password' => 'required|min:8',
        ]);

        $admin = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        $admin->level = 'admin';
        $admin->save();
        return redirect()->back();
    }
}
