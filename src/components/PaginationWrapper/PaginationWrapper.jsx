import Pagination from "../Pagination/Pagination";

function PaginationWrapper({ top, bottom, children, ...paginationProps }) {
  return (
    <>
      {top && <Pagination {...paginationProps} />}
      {children}
      {bottom && <Pagination {...paginationProps} />}
    </>
  );
}

export default PaginationWrapper;
