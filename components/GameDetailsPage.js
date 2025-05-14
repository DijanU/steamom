"use client"

import styles from "./GameDetailsPage.module.css"

export default function GameDetailsPage({ game, onBuy, onBack }) {
  // Default game data if none is provided
  const gameData = game || {
    id: 1,
    name: "Game Name",
    genre: "Genre",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet tincidunt ligula. Integer eget elit nec elit iaculis egestas.",
    price: 19.99,
  }

  return (
    <div className={styles.gameDetailsContainer}>
      <div className={styles.gameDetailsCard}>
        <header className={styles.gameDetailsHeader}>
          <h2>Game List</h2>
          <h2 className={styles.active}>Store</h2>
          <h2>My Games</h2>
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
            <button className={styles.buyButton} onClick={onBuy}>
              Buy Now
            </button>
            <button className={styles.backButton} onClick={onBack}>
              Back to Store
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
