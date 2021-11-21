const Filters = ({ page, setPage, name, setName, limit, count }) => {
  const handlePrevious = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };
  const handleNext = () => {
    if (Math.sign(Number(count) - Number(limit) * page) === 1) {
      setPage(page + 1);
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
          <div className='search'>
            <label htmlFor='search'></label>
            <input
              id='search'
              type='text'
              placeholder={count > 5000 ? "comics title" : "character's name"}
              value={name}
              onChange={handleSearch}
            />
          </div>
          <div className='pagination'>
            <span className='start-end-page' onClick={() => setPage(1)}>
              Start
            </span>
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
              onClick={handleNext}
              className='arrow'
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
            >
              <path d='M21 12l-18 12v-24z' />
            </svg>
            <span
              className='start-end-page'
              onClick={() => setPage(Math.floor(count / limit) + 1)}
            >
              End
            </span>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Filters;
