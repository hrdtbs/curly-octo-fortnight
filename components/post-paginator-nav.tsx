import Link from "@/components/link";
import { ArrowLeft, ArrowRight } from "iconoir-react";

const PaginatorButton = ({
  goTo,
  disable,
  children,
}: {
  goTo: number;
  disable: boolean;
  children: React.ReactNode;
}) => {
  return <Link href={`/page/${goTo}`}>{children}</Link>;
};

const PostPaginatorNav = ({
  currentPage,
  totalPages,
}: {
  currentPage: number;
  totalPages: number;
}) => {
  return (
    <div className="flex flex-col items-center gap-5 pt-4">
      <PaginatorButton goTo={currentPage - 1} disable={currentPage === 1}>
        <ArrowLeft />
        <span>Previous</span>
      </PaginatorButton>
      <ol className="[&>li]:inline-block">
        {Array.from({ length: totalPages }).map((_, idx) => {
          const pageNumber = idx + 1;
          return (
            <li key={pageNumber}>
              <Link href={`/page/${pageNumber}`}>{pageNumber}</Link>
            </li>
          );
        })}
      </ol>
      <PaginatorButton
        goTo={currentPage + 1}
        disable={currentPage === totalPages}>
        <span>Next</span>
        <ArrowRight />
      </PaginatorButton>
    </div>
  );
};

export default PostPaginatorNav;
