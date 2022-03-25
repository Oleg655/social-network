import { ChangeEvent, useState } from "react";
import React from "react";

type PaginationPropsType = {
  countOfUseres: number
  sizeOfPage: number
  page: number
  setActualPageHandler: (page: number) => void
}

const Pagination = (props: PaginationPropsType) => {
  
  const sumOfPages = Math.ceil(props.countOfUseres / props.sizeOfPage);

  const pages: Array<number> = [];

  for (let i = 1; i <= sumOfPages; i++) {
    pages.push(i);
  }

  const pageNumberLimit = 10;
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState<number>(10);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState<number>(1);

  const renderPageNumbers = pages.map((p) => {
    if (p < maxPageNumberLimit + 1 && p >= minPageNumberLimit) {
      return (
        <button
          onClick={() => {
            props.setActualPageHandler(p);
          }}
          key={p}
        >
          {p}
        </button>
      );
    }
  });

  const parseIntFunction = (number: number) => {
    //для инпута
    
    setMinPageNumberLimit(1);
        setMaxPageNumberLimit(10);
    if (number > 10) {
      if (number % 10 === 0) {
        setMinPageNumberLimit(number - 9);
        setMaxPageNumberLimit(number);
      } else {
        const n = parseInt(number.toString().charAt(0) + 1);
        setMinPageNumberLimit(n);
        setMaxPageNumberLimit(n + 9);
      }
    }
    if (number > 100) {
      if (number % 10 === 0) {
        setMinPageNumberLimit(number - 9);
        setMaxPageNumberLimit(number);
      } else {
        const n = parseInt(
          number.toString().charAt(0) + number.toString().charAt(1) + 1
        );
        setMinPageNumberLimit(n);
        setMaxPageNumberLimit(n + 9);
      }
    }
    if (number > 1000) {
      if (number % 10 === 0) {
        setMinPageNumberLimit(number - 9);
        setMaxPageNumberLimit(number);
      }else{
        const n = parseInt(
          number.toString().charAt(0) +
            number.toString().charAt(1) +
            number.toString().charAt(2) +
            1
        );
        setMinPageNumberLimit(n);
        setMaxPageNumberLimit(n + 9);
      }
      
    }
  };

  const handleNextBtn = () => {
    // кнопки вперед - назад
    props.setActualPageHandler(props.page + 1);

    if (props.page + 1 > maxPageNumberLimit) {
      setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };

  const handlePrevBtn = () => {
    // кнопки вперед - назад
    props.setActualPageHandler(props.page - 1);

    if ((props.page - 1) % pageNumberLimit === 0) {
      setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };

  let pageIncrementBtn = null;
  if (pages.length > maxPageNumberLimit) {
    pageIncrementBtn = <button onClick={handleNextBtn}> &hellip; </button>;
  }

  let pageDecrementBtn = null;
  if (minPageNumberLimit > 1) {
    pageDecrementBtn = <button onClick={handlePrevBtn}> &hellip; </button>;
  }

  return (
    <div>
      <button
        onClick={handlePrevBtn}
        disabled={props.page === pages[0] ? true : false}
      >
        Prev
      </button>
      {pageDecrementBtn}
      {renderPageNumbers}
      {pageIncrementBtn}
      <button
        onClick={handleNextBtn}
        disabled={props.page === pages[pages.length - 1] ? true : false}
      >
        Next
      </button>
      <input
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          let number = +e.currentTarget.value;
         props.setActualPageHandler(number);

          parseIntFunction(number);
        }}
        placeholder="Enter number of page"
        type="number"
      />
    </div>
  );
};

export default Pagination;
