const Filters = ({ page, setPage }) => {
  return (
    <div className='filters'>
      <div className='search'>
        <label htmlFor='search'>Hello</label>
        <input id='search' type='text' />
      </div>
      <div className='second-container'>
        <div></div>
        <div className='pages'>
          {/* TODO: review pages to be never 0 or maximum */}
          <div className='arrow' onClick={() => setPage(page - 1)}>
            LEFT
          </div>
          <span>PAGE {page}</span>
          <div className='arrow' onClick={() => setPage(page + 1)}>
            RIGHT
          </div>
        </div>
        <div className='limit'>LIMIT</div>
      </div>
    </div>
  );
};

export default Filters;
