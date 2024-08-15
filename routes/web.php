<?php

use App\Http\Controllers\AboutController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\ApplicationController;
use App\Http\Controllers\DocumentFormController;
use App\Http\Controllers\EducationDropdownController;
use App\Http\Controllers\FaqController;
use App\Http\Controllers\GalleryController;
use App\Http\Controllers\PendaftaranController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ProfileFormController;
use App\Http\Controllers\RegistrationDataController;
use App\Http\Controllers\UserController;
use App\Models\Document;
use App\Models\User;
use App\Models\UserProfile;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboards', function () {
    $cek_document = Document::where('id_user', auth()->user()->id)->first();
    $cek_profile = UserProfile::where('id_user', auth()->user()->id)->first();


    $user_data = DB::table('users')
        ->join('user_profiles', 'users.id', '=', 'user_profiles.id_user')
        ->join('documents', 'users.id', '=', 'documents.id_user')
        ->where('users.id', '=', Auth::user()->id)
        ->first();

    $accepted_user = User::where('status_accept', 'Accepted')->count();
    $not_accepted_user = User::where('status_accept', 'Not Accepted')->count();

    $pending_user = DB::table('users')
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
        })
        ->where('status_accept', 'Pending')->count();

    return Inertia::render('Dashboard', [
        'user_data' => $user_data,
        'cek_document' => $cek_document,
        'cek_profile' => $cek_profile,
        'accepted_user' => $accepted_user,
        'not_accepted_user' => $not_accepted_user,
        'pending_user' => $pending_user

    ]);
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/about-us',  [AboutController::class, 'index'])->name('about-us');
Route::get('/applications', [ApplicationController::class, 'index'])->name('application');
Route::get('/gallerys', [GalleryController::class, 'index'])->name('gallery');
Route::get('/faqs', [FaqController::class, 'index'])->name('faq');


// Middleware user
Route::middleware(['middleware' => 'role:user'])->group(function () {

    Route::get('/profile-form', [ProfileFormController::class, 'index'])->name('profile.form');
    Route::post('/profile-form/post', [ProfileFormController::class, 'store'])->name('profile-form.store');

    Route::get('/profile-form-reset', [ProfileFormController::class, 'reset'])->name('profile-form.reset');
    Route::post('/profile-form/update/{id}', [ProfileFormController::class, 'reset_update'])->name('profile-form.reset_update');



    Route::get('/document-form', [DocumentFormController::class, 'index'])->name('document.form');
    Route::get('/document-form-done', [DocumentFormController::class, 'done'])->name('document.done');
    Route::post('/document-form/post', [DocumentFormController::class, 'store'])->name('document.store');
    Route::post('/document-form/update/{id}', [DocumentFormController::class, 'update'])->name('document.update');
});

Route::middleware(['middleware' => 'role:admin'])->group(function () {
    // User
    Route::get('/data-user', [UserController::class, 'index'])->name('user');
    Route::post('/data-user', [UserController::class, 'store'])->name('user.store');
    Route::patch('/data-user/update/{id}', [UserController::class, 'update_status'])->name('user.update_status');
    Route::delete('/data-user/{id}', [UserController::class, 'destroy'])->name('user.delete');

    // Admin
    Route::get('/data-admin', [AdminController::class, 'index'])->name('admin');
    Route::post('/data-admin', [AdminController::class, 'store'])->name('admin.store');
    Route::patch('/data-admin/update/{id}', [AdminController::class, 'update_status'])->name('admin.update_status');
    Route::delete('/data-admin/{id}', [AdminController::class, 'destroy'])->name('admin.delete');

    // Registration Data
    Route::get('/registration-data', [RegistrationDataController::class, 'index'])->name('registration.index');
    Route::get('/registration-data/detail/{id}', [RegistrationDataController::class, 'detail'])->name('registration.detail');
    Route::post('/registration-data/update/{id}', [RegistrationDataController::class, 'update'])->name('registration.update');

    // Update Reset
    Route::post('/profile-form-reset/update/{id}', [ProfileFormController::class, 'update_reset_form'])->name('profile-form.update_reset_form');

    // PDF
    Route::get('/pdf-registration', [RegistrationDataController::class, 'print_pdf'])->name('pdf');

    // Edcuation Dropdown
    // Route::get('/education-dropdown', [EducationDropdownController::class, 'index'])->name('education-dropdown.index');
    // Route::post('/education-dropdown/store', [EducationDropdownController::class, 'store'])->name('education-dropdown.store');
});



Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
