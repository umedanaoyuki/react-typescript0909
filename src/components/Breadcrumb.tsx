import { useState } from "react";
import styles from "./Breadcrumb.module.css";
import styled from "styled-components";
type Props = {
  items: string[];
};

type NoticeParagraphProps = {
  isBlank: boolean;
};

const NoticeParagraph = styled.p<NoticeParagraphProps>`
  font-weight: 100;
  color: ${(props) => (props.isBlank ? "red" : "gray")};
`;

export const Breadcrumb = ({ items }: Props) => {
  // const items = ["Home", "Library", "Date"];

  const [selectedValue, setSelectedValue] = useState("");

  return (
    <>
      <p className={styles.listTitle}>パンくずリスト</p>
      {items.length === 0 ? (
        <NoticeParagraph isBlank>itemがありません</NoticeParagraph>
      ) : (
        <NoticeParagraph isBlank={false}>
          itemが{items.length}あります
        </NoticeParagraph>
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
