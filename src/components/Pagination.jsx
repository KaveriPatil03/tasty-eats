import React from 'react'

const Pagination = ({totalPosts,postsPerPage,setCurrentPage}) => {

    let pages = [];
    for(let i=1;i<Math.ceil(totalPosts/postsPerPage);i++){
        pages.push(i);
    }
  return (
    <>
        {
            pages.map((pages,index) => (
                <button key={index}
                onClick={() => setCurrentPage(pages)}>
                    {pages}
                </button>
            ))
        }
    </>
  )
}

export default Pagination