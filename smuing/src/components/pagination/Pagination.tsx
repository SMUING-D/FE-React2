import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

type PaginationProps = {
  totalItems: number
  itemCountPerPage: number
  pageCount: number
  currentPage: number
}

const Pagination: React.FC<PaginationProps> = ({ totalItems, itemCountPerPage, pageCount, currentPage }) => {
  const totalPages = Math.ceil(totalItems / itemCountPerPage) //
  const [start, setStart] = useState<number>(1) // 시작 페이지
  const noPrev = start === 1
  const noNext = start + pageCount - 1 >= totalPages
  useEffect(() => {
    if (currentPage === start + pageCount) {
      setStart((prev) => prev + pageCount)
    }
    if (currentPage < start) {
      setStart((prev) => prev - pageCount)
    }
  }, [currentPage, pageCount, start])
  return (
    <div>
      <ul className="flex list-style-none">
        <li className={`${noPrev && 'invisible'}`}>
          <Link
            className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
            to={`?page=${start - 1}`}
          >
            이전
          </Link>
        </li>
        {[...Array(pageCount)].map((_, index) => (
          <>
            {start + index <= totalPages && (
              <li key={index}>
                <Link
                  className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
                  to={`?page=${start + index}`}
                >
                  {start + index}
                </Link>
              </li>
            )}
          </>
        ))}
        <li className={`${noNext && 'invisible'}`}>
          <Link
            className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
            to={`?page=${start + pageCount}`}
          >
            다음
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Pagination
