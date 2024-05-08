import { useEffect, useState } from "react";
import Filters from "../components/Filters";
import JobCard from "../components/card";
import styles from "../css/App.module.css";
import { getJobs } from "../utils/functions";

const Home = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);

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
    const apiCall = async () => {
      const newdata = await getJobs(page);
      const newDatalist = newdata.jdList;
      setData((data) => [...data, ...newDatalist]);
    };
    apiCall();
  }, [page]);

  return (
    <div id="main" className={styles.App}>
      Search Jobs
      <Filters />
      <div className={styles.cardsbody}>
        {data && data.map((each) => <JobCard key={each?.jdUid} item={each} />)}
      </div>
    </div>
  );
};

export default Home;
