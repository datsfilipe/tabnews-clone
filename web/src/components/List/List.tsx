import { type ReactNode, useMemo, useState } from "react";

type ListProps = {
  items: ReactNode[] | string[];
  pageSize: number;
};

const chunk = (items: ReactNode[] | string[], size: number) => {
  const result = [];
  for (let i = 0; i < items.length; i += size) {
    result.push(items.slice(i, i + size));
  }
  return result;
};

export function List(props: ListProps) {
  const { items, pageSize } = props;

  const [page, setPage] = useState(0);

  const pages = useMemo(() => {
    return chunk(items, pageSize);
  }, [items, pageSize]);

  const pageItems = useMemo(() => {
    return pages[page];
  }, [pages, page]);

  return (
    <div>
      <ul>
        {pageItems.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
      <div className="flex text-center space-x-4 text-md">
        <button
          className="flex items-center disabled:text-gray-600 disabled:cursor-not-allowed text-blue-600 hover:cursor-pointer [&:not(disabled):hover>span:last-of-type]:underline"
          onClick={() => setPage(page - 1)}
          disabled={page === 0}
        >
          <span className="material-symbols-outlined text-lg mt-1">
            navigate_before
          </span>
          <span>Anterior</span>
        </button>
        <button
          className="flex items-center disabled:text-gray-600 disabled:cursor-not-allowed text-blue-600 hover:cursor-pointer [&:not(disabled):hover>span:first-of-type]:underline"
          onClick={() => setPage(page + 1)}
          disabled={page === pages.length - 1}
        >
          <span className="">Próximo</span>
          <span className="material-symbols-outlined text-lg mt-1">
            navigate_next
          </span>
        </button>
      </div>
    </div>
  );
}
