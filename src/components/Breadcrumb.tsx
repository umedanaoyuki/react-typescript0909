import { useState } from "react";
import styles from "./Breadcrumb.module.css";
type Props = {
  items: string[];
};

export const Breadcrumb = ({ items }: Props) => {
  // const items = ["Home", "Library", "Date"];

  const [selectedValue, setSelectedValue] = useState("");

  return (
    <>
      <p className={styles.listTitle}>パンくずリスト</p>
      {items.length === 0 ? (
        <p className="">itemがありません</p>
      ) : (
        <p className="">itemが{items.length}あります</p>
      )}
      <nav>
        <ol className="breadcrumb">
          {items.map((item) => {
            return (
              <li key={item} className="breadcrumb-item">
                {item === selectedValue ? (
                  <>{item}</>
                ) : (
                  <a href="#" onClick={() => setSelectedValue(item)}>
                    {item}
                  </a>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
};
