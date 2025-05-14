"use client"

import { useRouter } from "next/navigation"
import styles from "./my-games.module.css"
import GamepadIcon from "@/components/GamepadIcon"

export default function MyGamesPage() {
  const router = useRouter()

  // Mock purchased games data
  const myGames = [
    { id: 4, name: "Game Name", genre: "Genre", lastPlayed: "2 days ago" },
    { id: 5, name: "Game Name", genre: "Genre", lastPlayed: "1 week ago" },
  ]

  return (
    <div className={styles.myGamesContainer}>
      <div className={styles.myGamesCard}>
        <header className={styles.myGamesHeader}>
          <div className={styles.myGamesLogo}>
            <GamepadIcon />
            <h1>My Games</h1>
          </div>
          <nav className={styles.myGamesNav}>
            <span className={styles.navItem} onClick={() => router.push("/store")}>
              Home
            </span>
            <span className={`${styles.navItem} ${styles.active}`}>My Games</span>
            <span className={styles.navItem} onClick={() => router.push("/user")}>
              User
            </span>
          </nav>
        </header>

        <div className={styles.myGamesList}>
          {myGames.length > 0 ? (
            myGames.map((game) => (
              <div key={game.id} className={styles.myGameItem}>
                <div className={styles.gameImage}>
                  <div className={styles.placeholderImage}></div>
                </div>
                <div className={styles.gameInfo}>
                  <h2>{game.name}</h2>
                  <p>{game.genre}</p>
                  <p className={styles.lastPlayed}>Last played: {game.lastPlayed}</p>
                </div>
                <div className={styles.gameActions}>
                  <button className={styles.playButton}>Play</button>
                </div>
              </div>
            ))
          ) : (
            <div className={styles.emptyState}>
              <p>You haven't purchased any games yet.</p>
              <button className={styles.browseButton} onClick={() => router.push("/store")}>
                Browse Store
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
