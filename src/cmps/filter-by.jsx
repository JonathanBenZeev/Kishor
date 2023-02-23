export const FilterBy = ({ filterBy, onFilterBy }) => {




  return (
    <section className='filter-by'>
      <form>
        <input
          type='text'
          placeholder='Search...'
          value={filterBy.txt}
          name='txt'
          onChange={onFilterBy}
        />
      </form>
    </section>
  )
}
