import { IPaginationProps } from "../shared/interfaces";

export default function Pagination({
  fetchChars,
  setCurrentPage,
  currentPage,
  pages,
}: IPaginationProps) {
  const onClickHadle = (event: React.MouseEvent) => {
    event.preventDefault();
    const { target } = event;
    const current = Number((target as HTMLElement).id);
    setCurrentPage(current);
    fetchChars(current);
  };

  const getPrev = (event: React.MouseEvent) => {
    event.preventDefault();
    const { target } = event;
    const prevPage: number = Number((target as HTMLElement).id) - 1;
    const page = prevPage !== 0 ? prevPage : 1;
    setCurrentPage(page);
    fetchChars(page);
  };

  const getNext = (event: React.MouseEvent) => {
    event.preventDefault();
    const page = currentPage > pages ? currentPage : 1;
    setCurrentPage(page);
    fetchChars(page);
  };

  const btns = [];
  for (let i = 0; i < pages!; i += 1) {
    btns.push(
      <button
        key={i}
        className="page-item"
        id={`${i + 1}`}
        onClick={onClickHadle}
        type="button"
      >
        {i + 1}
      </button>
    );
  }
  return (
    <div className="pagination">
      <div className="cpage">
        <label htmlFor="choosePage" className="label">
          Cards per page
          <input
            id="choosePage"
            type="text"
            className="select-limit"
            defaultValue="20"
          />
        </label>
      </div>
      <div className="pag-btns">{btns}</div>
      <div className="control-btns">
        <button className="control" type="button" onClick={getPrev}>
          Prev
        </button>
        <button className="control" type="button" onClick={getNext}>
          Next
        </button>
      </div>
    </div>
  );
}
