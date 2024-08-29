import { IPaginationProps } from "../../model/types.js";
import PaginationButtons from "../PaginationButtons/PaginationButtons.js";

interface Props {
  children: React.ReactNode;
  top?: boolean;
  bottom?: boolean;
}

function Pagination({
  top,
  bottom,
  children,
  ...paginationProps
}: Props & IPaginationProps) {
  return (
    <>
      {top && <PaginationButtons {...paginationProps} />}
      {children}
      {bottom && <PaginationButtons {...paginationProps} />}
    </>
  );
}

export default Pagination;
