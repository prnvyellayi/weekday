import { ChevronDown } from "lucide-react";
import React, { useState } from "react";
import styles from '../css/filterBox.module.css'

const FilterBox = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState([]);

  const header = "Toggle Dropdown";
  const options = ["option A", "option B", "option C"];

  return (
    <div className={styles.relative}
    >
      <span className={styles.box}
        onClick={() => setOpen(!open)}
      >
        {selected.length === 0 ? (
          <p>{header}</p>
        ) : (
          <div className={styles.wfull}>
            {selected.map((each) => (
              <span>{each}</span>
            ))}
          </div>
        )}
        <ChevronDown
          size={18} className={styles.icon}
        />
      </span>
      {open && (
        <div
          style={{
            position: "absolute",
            border: "1px solid #ccc",
            fontSize: "14px",
            borderRadius: "4px",
            marginTop: "2px",
            width: "100%",
            backgroundColor: "white",
            zIndex: "100",
          }}
        >
          {selected.length === options.length && (
            <p
              style={{
                padding: "5px 8px",
                height: "10px",
                textAlign: "center",
              }}
            >
              No options
            </p>
          )}
          {options.map((each) => {
            if (!selected.includes(each)) {
              return (
                <p
                  style={{
                    padding: "5px 8px",
                    height: "10px",
                    textAlign: "left",
                  }}
                  onClick={() => setSelected((data) => [...data, each])}
                >
                  {each}
                </p>
              );
            }
          })}
        </div>
      )}
    </div>
  );
};

export default FilterBox;
