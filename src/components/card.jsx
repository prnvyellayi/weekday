import React from "react";
import styles from "../css/card.module.css";

const CompanyDetails = ({ item }) => {
  return (
    <div className={styles.companyMain}>
      <img src={item?.logoUrl} className={styles.logo} />
      <div className={styles.companyBody}>
        <span className={styles.name}>{item?.companyName}</span>
        <span className={styles.role}>{item?.jobRole}</span>
        <span className={styles.location}>{item?.location}</span>
      </div>
    </div>
  );
};

const JobCard = ({ item }) => {
  return (
    <div className={styles.main}>
      <CompanyDetails item={item} />
      <span className={styles.salary}>
        Estimated Salary: {item?.minJdSalary ? `${item?.minJdSalary} -` : ''} {item?.maxJdSalary} LPA
      </span>
      <div className={styles.about}>
        <span className={styles.aboutcompany}>About Company:</span>
        <span className={styles.aboutBody}>{item?.jobDetailsFromCompany}</span>
        <span className={styles.show}>Show more</span>
      </div>
    </div>
  );
};

export default JobCard;
