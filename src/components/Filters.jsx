import React from "react";
import FilterBox from "./FilterBox";
import SearchInput from "./searchInput";

const Filters = () => {
  const roleOptions = ["Backend", "Frontend", "Fullstack"];
  const EmployeeOptions = [
    "0-10",
    "10-20",
    "21-50",
    "51-100",
    "101-200",
    "201-500",
    "500+",
  ];
  const experienceOptions = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
  const remoteOptions = ["Hybrid", "In-office", "Remote"];
  const salaryOptions = ["0", "10", "20", "30", "40", "50", "60", "70"];

  return (
    <div
      style={{
        width: '100%',
        display: "flex",
        flexWrap: "wrap",
        gap: "4px",
        alignItems: "center",
        justifyContent: 'start',
        marginBottom: '20px'
      }}
    >
      <FilterBox header={"Roles"} name={"roles"} options={roleOptions} multiple={true} />
      <FilterBox
        header={"Number of Employees"}
        name={"Employees"}
        options={EmployeeOptions}
        multiple={true}
      />
      <FilterBox
        header={"Experience"}
        name={"Experience"}
        options={experienceOptions}
        multiple={false}
      />
      <FilterBox header={"Remote"} name={"Location"} options={remoteOptions} multiple={true} />
      <FilterBox
        header={"Minimum Base Pay Salary"}
        name={"Salary"}
        options={salaryOptions}
        multiple={true}
      />
      <SearchInput />
    </div>
  );
};

export default Filters;
