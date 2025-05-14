"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import styles from "./store.module.css"
import GamepadIcon from "@/components/GamepadIcon"

export default function StorePage() {
  const [activeFilter, setActiveFilter] = useState("A")
  const [games, setGames] = useState([
    { id: 1, name: "Game Name", genre: "Genre", inWishlist: false },
    { id: 2, name: "Game Name", genre: "Genre", inWishlist: true },
    { id: 3, name: "Game Name", genre: "Genre", inWishlist: false },
  ])
  const router = useRouter()

  const toggleWishlist = (id) => {
    setGames(games.map((game) => (game.id === id ? { ...game, inWishlist: !game.inWishlist } : game)))
  }

  const handleSelectGame = (gameId) => {
    router.push(`/game/${gameId}`)
  }

  return (
    <div className={styles.storeContainer}>
      <div className={styles.storeCard}>
        <header className={styles.storeHeader}>
          <div className={styles.storeLogo}>
            <GamepadIcon />
            <h1>Store</h1>
          </div>
          <nav className={styles.storeNav}>
            <span className={`${styles.navItem} ${styles.active}`}>Home</span>
            <span className={styles.navItem} onClick={() => router.push("/my-games")}>
              My Games
            </span>
            <span className={styles.navItem} onClick={() => router.push("/user")}>
              User
            </span>
          </nav>
        </header>

        <div className={styles.storeFilters}>
          <div className={styles.filterDropdown}>
            <span>{activeFilter}</span>
            <span className={styles.dropdownArrow}>▼</span>
          </div>
          <div className={styles.filterDropdown}>
            <span>Filter</span>
            <span className={styles.dropdownArrow}>▼</span>
          </div>
          <div className={styles.filterDropdown}>
            <span>Sort</span>
            <span className={styles.dropdownArrow}>▼</span>
          </div>
        </div>

        <div className={styles.gamesList}>
          {games.map((game) => (
            <div key={game.id} className={styles.gameItem}>
              <div className={styles.gameImage} onClick={() => handleSelectGame(game.id)}>
                <div className={styles.placeholderImage}></div>
              </div>
              <div className={styles.gameInfo}>
                <h2 onClick={() => handleSelectGame(game.id)}>{game.name}</h2>
                <p>{game.genre}</p>
              </div>
              <div className={styles.gameActions}>
                {!game.inWishlist ? (
                  <button className={styles.wishlistButton} onClick={() => toggleWishlist(game.id)}>
                    Add to Wishlist
                  </button>
                ) : (
                  <button className={styles.removeButton} onClick={() => toggleWishlist(game.id)}>
                    Remove
                  </button>
                )}
                {game.id === 3 && <button className={styles.senowButton}>Senow</button>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
