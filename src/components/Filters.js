const Filters = ({ page, setPage, name, setName }) => {
  const handlePrevious = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };
  const handleSearch = (e) => {
    setName(e.target.value);
    setPage(1);
  };
  return (
    <div className='filters'>
      <div className='second-container'>
        <div></div>
        <div className='pages'>
          {/* TODO: review pages to be never 0 or maximum */}
          <div className='search'>
            <label htmlFor='search'></label>
            <input
              id='search'
              type='text'
              placeholder="character's name or comics title"
              value={name}
              onChange={handleSearch}
            />
          </div>
          <div className='pagination'>
            <svg
              onClick={handlePrevious}
              className='arrow'
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
            >
              <path d='M3 12l18-12v24z' />
            </svg>

            <span>PAGE {page}</span>

            <svg
              onClick={() => setPage(page + 1)}
              className='arrow'
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
            >
              <path d='M21 12l-18 12v-24z' />
            </svg>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Filters;
