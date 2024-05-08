import { useEffect, useState } from "react";
import Filters from "../components/Filters";
import JobCard from "../components/card";
import styles from "../css/App.module.css";
import { getJobs } from "../utils/functions";

const Home = () => {
  const [data, setData] = useState([null]);

  useEffect(() => {
    let page = 0;
    const apiCall = async () => {
      const data = await getJobs(page);
      setData(data.jdList);
      page++;
    };
    apiCall();

    document.addEventListener("scroll", async () => {
      const element = document.getElementById("main");
      const bottom =
        element.getBoundingClientRect().bottom <= window.innerHeight;
      if (bottom) {
        const newdata = await getJobs(page);
        const newDatalist = newdata.jdList
        setData((data) => [...data, ...newDatalist]);
        page++;
      }
    });
  }, []);
  return (
    <div id="main" className={styles.App}>
      <Filters />
      <div className={styles.cardsbody}>
        {data &&
          data.map((each) => <JobCard key={each?.jdUid} item={each} />)}
      </div>
    </div>
  );
};

export default Home;
