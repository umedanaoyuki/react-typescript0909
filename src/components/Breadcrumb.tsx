import { MouseEvent } from "react";

export const Breadcrumb = () => {
  const items = ["Home", "Library", "Date"];

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    console.log(event);
  };

  return (
    <>
      <p className="">パンくずリスト</p>
      {items.length === 0 ? (
        <p className="">itemがありません</p>
      ) : (
        <p className="">itemが{items.length}あります</p>
      )}
      <nav>
        <ol className="breadcrumb">
          {items.map((item) => {
            return (
              <li className="breadcrumb-item">
                <a href="#" onClick={handleClick}>
                  {item}
                </a>
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
};
