export const Breadcrumb = () => {
  const items = ["Home", "Library", "Date"];

  return (
    <>
      <p className="">パンくずリスト</p>
      <nav aria-label="breadcrumb">
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
