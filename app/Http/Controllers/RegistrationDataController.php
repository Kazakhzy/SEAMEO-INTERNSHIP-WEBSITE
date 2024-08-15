<?php

namespace App\Http\Controllers;

use App\Models\Documents;
use App\Models\UserProfile;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Barryvdh\DomPDF\Facade\Pdf;

class RegistrationDataController extends Controller
{
    public function index(Request $request)
    {

        $filter = $request->input('filter');

        $query = DB::table('users')
            ->where('level', 'user')
            ->whereExists(function ($query) {
                $query->select(DB::raw(1))
                    ->from('documents')
                    ->whereRaw('documents.id_user = users.id');
            })
            ->whereExists(function ($query) {
                $query->select(DB::raw(1))
                    ->from('user_profiles')
                    ->whereRaw('user_profiles.id_user = users.id');
            });

        if ($filter) {
            $query->where('status_accept', $filter);
        }


        // Paginate the results
        $datas = $query->paginate(10); // 10 items per page

        return Inertia::render('Dashboard/Registration-data/Index', [
            'datas' => $datas,
            'filter' => $filter,

        ]);
    }


    public function detail($id)
    {
        $details = DB::table('users')
            ->join('user_profiles', 'users.id', '=', 'user_profiles.id_user')
            ->join('documents', 'users.id', '=', 'documents.id_user')
            ->join('languages', 'users.id', '=', 'languages.id_user')
            ->join('user_skills', 'users.id', '=', 'user_skills.id_user')
            ->where('users.id', '=', $id)
            ->first();

        return Inertia::render('Dashboard/Registration-data/Detail', compact('details'));
    }

    public function update(Request $request)
    {
        // dd($request->all());
        DB::table('users')
            ->where('id', $request->id)
            ->update([
                'status_accept' => $request->status_accept
            ]);
        return redirect()->back();
    }

    public function print_pdf()
    {

        $accepted = DB::table('users')
            ->join('user_profiles', 'users.id', '=', 'user_profiles.id_user')
            ->where('users.status_accept', 'Accepted')
            ->get();

        $pdf = PDF::loadView('Pdf', compact('accepted'));
        return $pdf->download('Accepted Registration Data.pdf');
    }
}
