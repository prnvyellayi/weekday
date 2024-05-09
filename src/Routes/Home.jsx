import { useEffect, useState } from "react";
import Filters from "../components/Filters";
import JobCard from "../components/card";
import styles from "../css/App.module.css";
import { getJobs } from "../utils/functions";
import { useSearchParams } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [page, setPage] = useState(0);
  const [searchParams, setSearchParams] = useSearchParams();

  const filterFunc = (item) => {
    const exp = searchParams.get("Experience");
    const search = searchParams.get("search");
    const salary = searchParams.get("Salary");
    // const employees = searchParams.get("Employees");
    const roles = searchParams.get("Roles");
    // const remote = searchParams.get("Location");

    return (
      (exp ? Number(exp) >= Number(item.minExp ?? 0) : true) &&
      (salary
        ? Number(salary) <= Number(item.maxJdSalary ?? item.minJdSalary)
        : true) && 
      (search ? item?.companyName.toLowerCase().includes(search.toLowerCase()) : true) && 
      (roles ? roles.includes(item?.jobRole)  : true)
    );
  };

  const apiCall = async (reset) => {
    let newDatafilter = [];
    if(reset) {
      const newdata = await getJobs(0);
      const newDatalist = newdata.jdList;
      setData([...newDatalist]);
      newDatafilter = [...newDatalist]
    } else {
      const newdata = await getJobs(page);
      const newDatalist = newdata.jdList;
      setData((data) => [...data, ...newDatalist]);
      newDatafilter = [...data, ...newDatalist]
    }

    let temp = newDatafilter.filter((each) => filterFunc(each));
    setFilteredData(temp);
  };

  useEffect(() => {
    let index = 0;
    document.addEventListener("scroll", async () => {
      const element = document.getElementById("main");
      const bottom =
        element.getBoundingClientRect().bottom <= window.innerHeight;
      if (bottom) {
        index++;
        setPage(index);
      }
    });
  }, []);

  useEffect(() => {
    apiCall(false);
  }, [page]);

  useEffect(() => {
    console.log('test')
    apiCall(true);
  }, [searchParams]);

  return (
    <div id="main" className={styles.App}>
      Search Jobs
      <Filters />
      <div className={styles.cardsbody}>
        {filteredData &&
          filteredData.map((each, index) => <JobCard key={index} item={each} />)}
      </div>
      {filteredData && filteredData.length === 0 && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "8px",
            fontSize: "16px",
            fontWeight: "600",
            width: "100%",
            height: "60vh",
          }}
        >
          <img
            src="https://jobs.weekday.works/_next/static/media/nothing-found.4d8f334c.png"
            style={{ width: "150px", height: "150px" }}
          />
          No Jobs available for this category at the moment
        </div>
      )}
    </div>
  );
};

export default Home;
