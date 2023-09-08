import { useState, useRef, useMemo } from 'react'
import { getMovies } from '../services/movies.js'

const SortingType = {
  title: (movies) => [...movies].sort((a, b) => a.title.localeCompare(b.title)),
  year: (movies) => [...movies].sort((a, b) => a.year - b.year)
}

export function useMovies () {
  const [movies, setMovies] = useState([])
  const [sort, setSort] = useState('')
  const prevSearch = useRef(null)

  async function searchMovies ({ search }) {
    if (prevSearch.current != null && search === prevSearch.current) return

    prevSearch.current = search
    const newMovies = await getMovies({ search })
    setMovies(newMovies)
  }

  const sortedMovies = useMemo(() => {
    let sorted
    for (const [type, sortBy] of Object.entries(SortingType)) {
      if (sort === type) {
        sorted = sortBy(movies)
        break
      }
    }
    return sorted != null ? sorted : movies
    // return sort
    //   ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
    //   : movies
  }, [sort, movies])

  return { movies: sortedMovies, searchMovies, setSort }
}
