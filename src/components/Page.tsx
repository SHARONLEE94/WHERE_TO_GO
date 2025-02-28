import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router";

const Pagination = ({ totalCount = 1, pageNo = 1, searchVal = "" }) => {
  const navigate = useNavigate();
  const [pageNum, setpageNum] = useState(pageNo);
  const numOfRows = 10; // 일단 임의로 고정
  const totalPages = totalCount > 0 ? Math.ceil(totalCount / numOfRows) : 1;

  const handlePageChange = (newPage: number) => {
    if (newPage < 1 || newPage > totalPages) return;
    if (newPage === pageNum) return;
    setpageNum(newPage);
    navigate(`/search?location=${searchVal}&page=${newPage}`);
  };

  const renderPagination = () => {
    const maxPagesToShow = Math.min(5, totalPages);
    const pageButtons = [];

    let startPage = Math.max(1, pageNum - 4);
    let endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

    if (pageNum <= 5) {
      startPage = 1;
      endPage = Math.min(5, totalPages);
    } else if (pageNum >= totalPages - 4) {
      startPage = totalPages - 4;
      endPage = totalPages;
    } else {
      startPage = pageNum - 4;
      endPage = Math.min(pageNum, totalPages);
    }

    for (let page = startPage; page <= endPage; page++) {
      pageButtons.push(
        <Button
          key={page}
          variant={pageNum === page ? "default" : "outline"}
          className={pageNum === page ? "bg-[#FFB7C5] hover:bg-[#ff9fb2]" : ""}
          onClick={() => handlePageChange(page)}
        >
          {page}
        </Button>
      );
    }

    return pageButtons;
  };

  return (
    <div>
      {totalPages > 1 && (
        <div className="flex justify-center flex-wrap gap-2 mt-8">
          <Button
            variant="outline"
            size="icon"
            onClick={() => handlePageChange(Math.max(1, pageNum - 1))}
            disabled={pageNum === 1}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          {renderPagination()}

          <Button
            variant="outline"
            size="icon"
            onClick={() => handlePageChange(Math.min(totalPages, pageNum + 1))}
            disabled={pageNum === totalPages}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      )}
    </div>
  );
};

export default Pagination;
