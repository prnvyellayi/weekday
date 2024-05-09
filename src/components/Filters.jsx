import React from "react";
import FilterBox from "./FilterBox";
import SearchInput from "./searchInput";

const Filters = () => {
  const roleOptions = ["backend", "frontend", "tech lead","ios","android"];
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
  const locationOptions = ['delhi ncr', 'mumbai','remote','chennai','bangalore']
  const stackOptions = ['Next.js','React.js','Node.js','Nest.js','Javascript','Typescript','Golang','Python','Java','HTML','CSS'];

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
      <FilterBox header={"Roles"} name={"Roles"} options={roleOptions} multiple={true} />
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
      <FilterBox header={"Remote"} name={"remote"} options={remoteOptions} multiple={true} />
      <FilterBox header={"Location"} name={"location"} options={locationOptions} multiple={true} />
      <FilterBox header={"Tech Stack"} name={"stack"} options={stackOptions} multiple={true} />
      <FilterBox
        header={"Minimum Base Pay Salary"}
        name={"Salary"}
        options={salaryOptions}
        multiple={false}
      />
      <SearchInput />
    </div>
  );
};

export default Filters;
