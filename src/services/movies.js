// SET THE API KEY
const API_KEY = 'e13daa35'

// Mapping the API response for better componetization
const mappedMovies = (movies) => movies?.map(movie => {
  const {
    Title,
    Year,
    Poster,
    imdbID
  } = movie

  return {
    id: imdbID,
    title: Title,
    year: Year,
    img: Poster
  }
})

// Fetching the search
export async function getMovies ({ search }) {
  try {
    const api = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`)
    const res = await api.json()
    const movies = mappedMovies(res.Search)
    return movies
  } catch (err) {
    console.log(err)
  }
}
