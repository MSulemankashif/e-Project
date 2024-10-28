<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class CardController extends Controller
{
    public function process(Request $request)
    {
        // Store the data in session
        session([
            'card_data' => [
                'videoSource' => $request->videoSource,
                'title' => $request->title,
                'description' => $request->description,
                'thumbnail' => $request->thumbnail
            ]
        ]);

        // Redirect to open-letter page
        return redirect()->route('open.letter');
    }
}