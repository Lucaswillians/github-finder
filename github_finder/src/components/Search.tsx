import { useState, KeyboardEvent } from "react";
import { BsSearch } from "react-icons/bs";
import styles from "./Search.module.css"

type SearchProps = {
  loadUser: (userName: string) => Promise<void>
}

export default function Search ({ loadUser }: SearchProps ) {
  const [userName, setUserName] = useState("");

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Enter") return loadUser(userName)
  }

  return (
    <div className={styles.search}>
      <h2>Search an user</h2>
      <p>Meet theier best repository</p>
      <div className={styles.search_container}>
        <input type="text" placeholder="Type the username"
          onChange={(e) => setUserName(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button onClick={() => loadUser(userName)}> <BsSearch/> </button>
      </div>
    </div>
  );
}