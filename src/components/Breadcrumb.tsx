export const Breadcrumb = () => {
  const items = ["Home", "Library", "Date"];

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
                <a href="#">{item}</a>
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
};
