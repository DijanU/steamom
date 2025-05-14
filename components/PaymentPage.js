"use client"

import { useState } from "react"
import styles from "./PaymentPage.module.css"

export default function PaymentPage({ onComplete, onBack }) {
  const [cardNumber, setCardNumber] = useState("")
  const [expirationDate, setExpirationDate] = useState("")
  const [cvv, setCvv] = useState("")
  const [cardHolder, setCardHolder] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real app, you would process payment here
    onComplete()
  }

  return (
    <div className={styles.paymentContainer}>
      <div className={styles.paymentCard}>
        <div className={styles.paymentHeader}>
          <div className={styles.paymentLogo}></div>
          <h2>Payscreen</h2>
        </div>

        <div className={styles.paymentContent}>
          <h1>Payscreen</h1>
          <h3>Payment Information</h3>

          <form onSubmit={handleSubmit}>
            <div className={styles.paymentInputGroup}>
              <input
                type="text"
                placeholder="Card Number"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                required
              />
            </div>

            <div className={styles.paymentInputRow}>
              <div className={`${styles.paymentInputGroup} ${styles.half}`}>
                <input
                  type="text"
                  placeholder="Expiration Date"
                  value={expirationDate}
                  onChange={(e) => setExpirationDate(e.target.value)}
                  required
                />
              </div>
              <div className={`${styles.paymentInputGroup} ${styles.half}`}>
                <input type="text" placeholder="CVV" value={cvv} onChange={(e) => setCvv(e.target.value)} required />
              </div>
            </div>

            <div className={styles.paymentInputGroup}>
              <input
                type="text"
                placeholder="Card Holder"
                value={cardHolder}
                onChange={(e) => setCardHolder(e.target.value)}
                required
              />
            </div>

            <div className={styles.paymentActions}>
              <button type="submit" className={styles.buyButton}>
                Buy
              </button>
              <button type="button" className={styles.backButton} onClick={onBack}>
                Back
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
