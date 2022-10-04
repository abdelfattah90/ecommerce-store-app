import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import Searchbar from '../styles/components/Searchbar.module.css'

const SearchBar = () => {
  return (
    <>
      <div className={`container p-3 ${Searchbar.search}`}>
        <select
          className={`form-select shadow-none ${Searchbar.selectSearch}`}
          aria-label='Default select'
          defaultValue={'DEFAULT'}
        >
          <option value='DEFAULT'>All</option>
          <option value={1}>One</option>
          <option value={2}>Two</option>
          <option value={3}>Three</option>
        </select>

        <input
          type='text'
          className={`form-control shadow-none ${Searchbar.inputSearch}`}
          aria-label='Text input'
          placeholder='Search...'
        />
        <span className={`${Searchbar.faSearch}`}>
          <FontAwesomeIcon icon={faSearch} />
        </span>
      </div>
    </>
  )
}

export default SearchBar
