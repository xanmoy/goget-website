import { NextResponse } from 'next/server';
import axios from 'axios';

export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const q = searchParams.get('q');

    if (!q) {
        return NextResponse.json({ error: 'Query parameter is required' }, { status: 400 });
    }

    try {
        const response = await axios.get(`https://pkg.go.dev/search?q=${q}`);
        const data = response.data;
        const results = data.results || [];
        return NextResponse.json(results);
    } catch (error) {
        console.error('Error fetching data from pkg.go.dev:', error);
        return NextResponse.json({ error: 'Error fetching data' }, { status: 500 });
    }
}
