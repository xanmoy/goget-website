// app/api/search/route.ts
import { NextRequest, NextResponse } from 'next/server';
import fetch from 'node-fetch';

export async function GET(request: NextRequest) {
    const query = new URL(request.url).searchParams.get('query');
    const response = await fetch(`https://pkg.go.dev/search?q=${query}`);
    const data = await response.text();

    return NextResponse.json(data);  // Using NextResponse for better handling
}
