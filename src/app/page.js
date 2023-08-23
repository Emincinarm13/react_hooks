import styles from './page.module.css'
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>REACT HOOKS</h1>
      <ul className={styles.ul}>
        <li className={styles.li}>
          <Link href={"/useState/class"}> UseState class component</Link>
        </li>
        <li className={styles.li} >
          <Link href={"/useState/functional"}> UseState function component</Link>
        </li>
        <li className={styles.li}>
          <Link href={"/useContext"}> useContext</Link>
        </li>
        <li className={styles.li}>
          <Link href={"/useEffect/class"}> useEffect class component</Link>
        </li>
        <li className={styles.li}>
          <Link href={"/useEffect/functional"}> useEffect function component</Link>
        </li>
        <li className={styles.li}>
          <Link href={"/reactMemoAndCallback"}> React.memo and useCallback</Link>
        </li>
        <li className={styles.li}>
          <Link href={"/useMemo"}>useMemo</Link>
        </li>
        <li className={styles.li}>
          <Link href={"/useReducer"}> useReducer</Link>
        </li>
        <li className={styles.li}>
          <Link href={"/useRef"}> useRef</Link>
        </li>
        <li className={styles.li}>
          <Link href={"/customHooks"}> custom hooks</Link>
        </li>
      </ul>

    </main>
  )
}
