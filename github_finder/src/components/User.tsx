import { MdLocationPin } from "react-icons/md";
import { UserProps } from "../types/user";
import styles from "./User.module.css";

export default function User ({ avatar_url, login, location, followers, following }: UserProps) {
  return (
    <div className={styles.user}>
      <img src={avatar_url} alt={login} />
      <h2>{login}</h2>
      {location && (
      <p className={styles.location}>
        <MdLocationPin/>
        <span>{location}</span>
      </p>
      )}
      <div className={styles.stats}>
        <div>
          <p>Followers: </p>
          <p className={styles.number}>{followers}</p>
        </div>
        <div>
          <p>Following: </p>
          <p className={styles.number}>{following}</p>
        </div>
      </div>
    </div>
  );
}