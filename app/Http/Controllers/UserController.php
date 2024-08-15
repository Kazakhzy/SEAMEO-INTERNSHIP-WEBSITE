<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UserController extends Controller
{
    public function index()
    {
        $user = User::where('level', 'user')->paginate(10);
        return Inertia::render('Dashboard/User/Index', compact('user'));
    }

    public function update_status($id)
    {
        // dd($id);
        $user = User::find($id);
        if ($user->status == 'Aktif') {
            $user->update(['status' => 'Tidak Aktif']);
        } else {
            $user->update(['status' => 'Aktif']);
        }
        return redirect()->back();
    }

    public function destroy($id)
    {
        $user = User::find($id);
        $user->delete();
        return redirect()->back();
    }
}
