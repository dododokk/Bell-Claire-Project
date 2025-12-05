import { useState } from "react";
import styles from "./Option.module.css";

type OptionProps = {
  title: string;
  options: string[];
  onChange?: (value: string) => void;
};

const Option = ({ title, options, onChange }: OptionProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);

  const handleSelect = (value: string) => {
    setSelected(value);
    setIsOpen(false);
    onChange?.(value);
  };

  return (
    <div className={styles.optionWrapper}>
      <span className={styles.title}>{title}</span>

      <div className={styles.optionRight}>
        <div
          className={styles.selectBox}
          onClick={() => setIsOpen(prev => !prev)}
        >
          <span className={styles.selectedText}>
            {selected ?? "- [필수] select option"}
          </span>
        </div>

        {isOpen && (
          <ul className={styles.optionList}>
            {options.map(option => (
              <li
                key={option}
                className={styles.optionItem}
                onClick={() => handleSelect(option)}
              >
                {option}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Option;
