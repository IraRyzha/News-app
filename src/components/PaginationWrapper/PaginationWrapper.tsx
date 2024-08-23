import { IPaginationProps } from "../../interfaces/index.js";
import Pagination from "../Pagination/Pagination.js";

interface Props {
  children: React.ReactNode;
  top?: boolean;
  bottom?: boolean;
}

function PaginationWrapper({
  top,
  bottom,
  children,
  ...paginationProps
}: Props & IPaginationProps) {
  return (
    <>
      {top && <Pagination {...paginationProps} />}
      {children}
      {bottom && <Pagination {...paginationProps} />}
    </>
  );
}

export default PaginationWrapper;
