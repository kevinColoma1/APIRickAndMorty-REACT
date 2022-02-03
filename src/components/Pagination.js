import React from 'react';

const Pagination = ({prev, next, clickAntes, clickSiguiente}) => {

    const anteriorPagina=() =>{
        clickAntes();
    }

    const siguientePagina=() =>{
        clickSiguiente();
    }

  return (
      <nav className='my-5'>
          <ul className='pagination justify-content-center'>
              {prev ? (
                <li className='page-item'>
                <button className='page-link'onClick={anteriorPagina} >Previous</button>
                </li>
            ): null}
            {next ? (
                    <li className='page-item'>
                    <button  className='page-link'onClick={siguientePagina} >Next</button>
                    </li>
            ) : null}
          </ul>
      </nav>
    );
};

export default Pagination;
