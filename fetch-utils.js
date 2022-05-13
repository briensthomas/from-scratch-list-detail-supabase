const SUPABASE_URL = 'https://plkemcgrxzmmcpdtjfif.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBsa2VtY2dyeHptbWNwZHRqZmlmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTIyOTcxOTYsImV4cCI6MTk2Nzg3MzE5Nn0.kfBRa_T42tBk603NpWRP4Wq03rowUysjlQ_fwhXu6Jw';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function getMovies() {
    const response = await client.from('Movies').select('*');
    console.log(response);
    return response.data;
}

export async function getMovieById(idFromParameters) {
    const response = await client.from('Movies').select('*').match({ id: idFromParameters }).single();
    console.log(response);
    return response.data;
}

export async function getMovieByGenre(movieGenre) {
    console.log(movieGenre);
    const response = await client.from('Movies').select('*').like('genre', `%${movieGenre}%`);
    console.log(response);
    return response.data;
}