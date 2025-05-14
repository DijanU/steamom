"use client"

import { useRouter } from "next/navigation"
import styles from "./game-details.module.css"

// Mock game data - in a real app, this would come from an API
const gamesData = [
  {
    id: 1,
    name: "Game Name",
    genre: "Genre",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet tincidunt ligula. Integer eget elit nec elit iaculis egestas.",
    price: 19.99,
  },
  {
    id: 2,
    name: "Game Name",
    genre: "Genre",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet tincidunt ligula. Integer eget elit nec elit iaculis egestas.",
    price: 19.99,
  },
  {
    id: 3,
    name: "Game Name",
    genre: "Genre",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet tincidunt ligula. Integer eget elit nec elit iaculis egestas.",
    price: 19.99,
  },
]

export default function GameDetailsPage({ params }) {
  const router = useRouter()
  const gameId = Number.parseInt(params.id)

  // Find the game by ID
  const gameData = gamesData.find((game) => game.id === gameId) || gamesData[0]

  return (
    <div className={styles.gameDetailsContainer}>
      <div className={styles.gameDetailsCard}>
        <header className={styles.gameDetailsHeader}>
          <h2 onClick={() => router.push("/game-list")}>Game List</h2>
          <h2 className={styles.active} onClick={() => router.push("/store")}>
            Store
          </h2>
          <h2 onClick={() => router.push("/my-games")}>My Games</h2>
        </header>

        <div className={styles.gameDetailsContent}>
          <div className={styles.gameImageLarge}>
            <div className={styles.placeholderImageLarge}></div>
          </div>

          <div className={styles.gameInfoDetailed}>
            <h1>{gameData.name}</h1>
            <h3>{gameData.genre}</h3>
            <p className={styles.gameDescription}>{gameData.description}</p>
          </div>

          <div className={styles.gamePrice}>
            <h2>${gameData.price.toFixed(2)}</h2>
          </div>

          <div className={styles.gameActionsDetailed}>
            <button className={styles.buyButton} onClick={() => router.push(`/payment/${gameId}`)}>
              Buy Now
            </button>
            <button className={styles.backButton} onClick={() => router.push("/store")}>
              Back to Store
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
