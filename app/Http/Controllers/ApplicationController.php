<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class ApplicationController extends Controller
{
    public function index()
    {
        return Inertia::render('Application/Index');
    }
}
