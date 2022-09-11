import React from 'react'
import "./pagination.css"

const Pagination = ({ setPageControl, pageControl }) => {
    let totalPage = Math.ceil(pageControl.results / pageControl.perPage);
    const setPrevPage = () => {
        if (pageControl.page <= 1) return;
        setPageControl({ ...pageControl, page: pageControl.page - 1 })
    }
    const setNextPage = () => {
        if (pageControl.page >= totalPage) return;
        setPageControl({ ...pageControl, page: pageControl.page + 1 })
    }
    return (
        <div className='pgiDiv'>
            <h3>
                <span>Total results : {pageControl.results}</span>
                <span>Total pages : {totalPage}</span>
            </h3>
            <div className='setPageDiv'>
                {
                    (pageControl.page > 1) && <button onClick={setPrevPage}>Prev</button>
                }
                <h3>{pageControl.page}</h3>
                {
                    (pageControl.page < totalPage) && <button onClick={setNextPage}>Next</button>
                }
            </div>
        </div>
    )
}

export default Pagination
