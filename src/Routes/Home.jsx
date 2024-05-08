import { useEffect, useState } from "react";
import Filters from "../components/Filters";
import JobCard from "../components/card";
import styles from "../css/App.module.css";
import { getJobs } from "../utils/functions";

function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const apiCall = async () => {
      const data = await getJobs(0);
      return data;
    };

    const res = apiCall();
    setData(res);
  }, []);

  return (
    <div className={styles.App}>
      <Filters />
      <div className={styles.cardsbody}>
        {data &&
          data.jdList.map((each, index) => <JobCard key={index} item={each} />)}
      </div>
    </div>
  );
}

export default Home;
