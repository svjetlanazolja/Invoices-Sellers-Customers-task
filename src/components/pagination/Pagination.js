// import React from "react";
// import { useEffect, useState } from "react";
// import ReactPaginate from "react-paginate";

// const Pagination = (props) => {
//   const { data } = props;

//   const [currentItems, setCurrentItems] = useState([]);
//   const [pageCount, setPageCount] = useState(0);
//   const [itemOffset, setItemOffset] = useState(0);
//   const itemsPerPage = 4;

//   useEffect(() => {
//     const endOffset = itemOffset + itemsPerPage;
//     setCurrentItems(data.slice(itemOffset, endOffset));
//     setPageCount(Math.ceil(data.lenght / itemsPerPage));
//   }, [itemOffset, itemsPerPage, data]);

//   const handlePageClick = (event) => {
//     const newOffset = (event.selected * itemsPerPage) % data.lenght;
//     setItemOffset(newOffset);
//   };

//   return (
//     <div>
//       <ReactPaginate
//         breakLabel="..."
//         nextLabel=">"
//         onPageChange={handlePageClick}
//         pageRangeDisplayed={3}
//         pageCount={pageCount}
//         previousLabel="<"
//         renderOnZeroPageCount={null}
//       />
//     </div>
//   );
// };

// export default Pagination;
import React from "react";

const Pagination = () => {
  return <div>Pagination</div>;
};

export default Pagination;
