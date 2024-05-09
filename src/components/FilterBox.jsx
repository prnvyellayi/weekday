import { ChevronDown } from "lucide-react";
import React, { useEffect, useState } from "react";
import styles from "../css/filterBox.module.css";

const FilterBox = ({ header, options, name }) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    document.addEventListener("click", (e) => {
      if (!document.getElementById(name).contains(e.target)) {
        setOpen(false);
      }
    });

    return () =>
      document.removeEventListener("click", (e) => {
        if (!document.getElementById(name).contains(e.target)) {
          setOpen(false);
        }
      });
  }, []);

  return (
    <div style={{display: 'flex', flexDirection: 'column', gap: '4px', alignItems: 'start'}}>
      <span className={`${styles.nameBox} ${selected.length > 0 && styles.visible}`}>{name}</span>
      <div className={styles.relative} id={name}>
        <span className={styles.box} onClick={() => setOpen(!open)}>
          {selected.length === 0 ? (
            <p>{header}</p>
          ) : (
            <>
              <div className={styles.selectedMain}>
                {selected.map((each) => (
                  <span className={styles.select}>
                    {each}
                    <p
                      className={styles.cross}
                      onClick={(e) => {
                        e.stopPropagation();
                        let temp = [];
                        selected.map((item) => {
                          if (item !== each) temp.push(item);
                        });
                        setSelected(temp);
                      }}
                    >
                      X
                    </p>
                  </span>
                ))}
              </div>
              <p
                style={{
                  fontWeight: "600",
                  color: "#757575",
                  cursor: "pointer",
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  setSelected([]);
                }}
              >
                X
              </p>
            </>
          )}
          <ChevronDown size={18} className={styles.icon} />
        </span>
        {open && (
          <div className={styles.optionsMain}>
            {selected.length === options.length && (
              <p className={styles.nooption}>No options</p>
            )}
            {options.map((each) => {
              if (!selected.includes(each)) {
                return (
                  <p
                    className={styles.option}
                    onClick={() => {
                      setSelected((data) => [...data, each]);
                      setOpen(false);
                    }}
                  >
                    {each}
                  </p>
                );
              }
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default FilterBox;
