"use client"

import { useState } from "react"
import styles from "./LoginPage.module.css"
import GamepadIcon from "./GamepadIcon"

export default function LoginPage({ onLogin, onSignUp }) {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real app, you would validate and authenticate here
    onLogin()
  }

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginCard}>
        <div className={styles.loginIcon}>
          <GamepadIcon />
        </div>
        <h1>Login</h1>
        <p className={styles.loginSubtitle}>Enter user and password</p>

        <form onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <input
              type="text"
              placeholder="User"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className={styles.loginButton}>
            Log in
          </button>
        </form>

        <p className={styles.signupLink} onClick={onSignUp}>
          Sign up
        </p>
      </div>
    </div>
  )
}
