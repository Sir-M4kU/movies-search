// import { useMovies } from '../hooks/use-movies.js'

export function Movies ({ movies }) {
  if (movies?.length <= 0) {
    console.log(movies)
    return (
      <p>Try search something...</p>
    )
  }
  return (
    <ul>
      {
        movies?.map(movie => (
          <li key={movie.id}>
            <section>
              <h2>{movie.title}</h2>
              <p>{movie.year}</p>
            </section>
            <img
              src={movie.img}
              alt={movie.title}
            />
          </li>
        ))
      }
    </ul>
  )
}
