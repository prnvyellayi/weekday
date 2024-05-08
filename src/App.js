import Filters from "./components/Filters";
import JobCard from "./components/card";
import styles from "./css/App.module.css";
import { getJobs } from "./utils/functions";

async function App() {
  const data = await getJobs(0);
  return (
    <div className={styles.App}>
      <Filters />
      <div className={styles.cardsbody}>
        {data && data.map((each) => <JobCard item={each} />)}
      </div>
    </div>
  );
}

export default App;
