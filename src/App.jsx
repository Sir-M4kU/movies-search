import './app.css'
import { Form } from './components/form'
import { Movies } from './components/movies'
import { useMovies } from './hooks/use-movies'
// import { useForm } from './hooks/use-form'

export default function App () {
  const { movies, searchMovies, setSort } = useMovies()
  // const { search, updateSearch } = useForm()

  return (
    <>
      <header>
        <h1>Movies Search</h1>
        <Form searchMovies={searchMovies} setSort={setSort} />
      </header>
      <main>
        {/* <p>{search}</p> */}
        <Movies movies={movies} />
      </main>
    </>
  )
}
