import { useRef, useId } from 'react'

export function Form ({ searchMovies, setSort }) {
  const formRef = useRef(null)
  const sortId = useId()
  const handleSort = (e) => setSort(e.target.value)

  // TODO: Make a debounce search using onChange input event
  // function handleInputValue (e) {
  //   const newSearch = e.target.value
  //   updateSearch(newSearch)
  // }
  function handleSubmit (e) {
    e.preventDefault()
    const { search } = Object.fromEntries(new FormData(e.target))
    if (formRef.current != null) {
      const $form = formRef.current
      $form.reset()
    }
    if (search != null && !(/^\s/.test(search))) {
      searchMovies({ search })
    }
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      <div>
        <input
          type='text'
          required
          name='search'
          placeholder='Star Wars, Toy Story, Avengers...'
          minLength='3'
        />
        <label htmlFor={sortId}>Sort by:</label>
        <select id={sortId} onChange={handleSort}>
          <option value='title'>Title</option>
          <option value='year'>Year</option>
        </select>
      </div>
      <button>Search</button>
    </form>
  )
}
