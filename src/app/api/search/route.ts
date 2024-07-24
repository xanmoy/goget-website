// // src/app/api/search/route.ts
// import { NextRequest, NextResponse } from 'next/server';
// import fetch from 'node-fetch';
// import cheerio from 'cheerio';

// export async function GET(request: NextRequest) {
//     const query = new URL(request.url).searchParams.get('query');
//     if (!query) {
//         return NextResponse.json({ error: 'Query parameter is missing' }, { status: 400 });
//     }

//     try {
//         const response = await fetch(`https://pkg.go.dev/search?q=${query}`);
//         const html = await response.text();
//         const $ = cheerio.load(html);

//         // Example: Adjust the selectors based on the actual HTML structure of pkg.go.dev
//         const results = [];
//         $('.search-results-item').each((index, element) => {
//             const name = $(element).find('.package-name').text();
//             const link = $(element).find('a').attr('href');

//             if (name && link) {
//                 results.push({
//                     name,
//                     url: `https://pkg.go.dev${link}`,
//                 });
//             }
//         });

//         return NextResponse.json(results);
//     } catch (error) {
//         return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
//     }
// }
