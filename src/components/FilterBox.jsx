import { ChevronDown } from "lucide-react";
import React, { useEffect, useState } from "react";
import styles from "../css/filterBox.module.css";
import { useSearchParams } from "react-router-dom";
import { useDebounceValue } from "../utils/use-debouce";

const FilterBox = ({ header, options, name, multiple }) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState([]);

  const debounceSearch = useDebounceValue(selected, 500);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (debounceSearch.length > 0) {
      let str= "";
      for(let i = 0; i < debounceSearch.length; i++) {
        if(i === debounceSearch.length - 1) {
          str += debounceSearch[i]
        } else {
          str += debounceSearch[i] + ','
        }
      }
      params.set(name, str);
    } else {
      params.delete(name);
    }
    setSearchParams(params);
  }, [debounceSearch]);

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
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "4px",
        alignItems: "start",
      }}
    >
      <span
        className={`${styles.nameBox} ${selected.length > 0 && styles.visible}`}
      >
        {name}
      </span>
      <div className={styles.relative} id={name}>
        <span className={styles.box} onClick={() => setOpen(!open)}>
          {selected.length === 0 ? (
            <p>{header}</p>
          ) : (
            <>
              <div className={styles.selectedMain}>
                {selected.map((each, index) => (
                  <span key={index} className={styles.select}>
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
            {options.map((each, index) => {
              if (!selected.includes(each)) {
                return (
                  <p
                    className={styles.option}
                    key={index}
                    onClick={() => {
                      if (multiple) setSelected((data) => [...data, each]);
                      else setSelected([each])
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
