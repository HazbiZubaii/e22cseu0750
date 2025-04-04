import { useState } from "react";
import axios from "axios";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [type, setType] = useState("prime");
  const [average, setAverage] = useState(null);

  const fetchAverage = async () => {
    try {
      const res = await axios.get(`/api/numbers?type=${type}`);
      setAverage(res.data.average);
    } catch (error) {
      console.error("Error fetching numbers", error);
    }
  };

  return (
    <div className={styles.container}>
      <h1>Average Calculator</h1>
      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="prime">Prime</option>
        <option value="fibonacci">Fibonacci</option>
        <option value="even">Even</option>
        <option value="random">Random</option>
      </select>
      <button onClick={fetchAverage}>Get Average</button>
      {average !== null && <h2>Average: {average}</h2>}
    </div>
  );
}
