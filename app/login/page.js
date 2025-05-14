"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import styles from "./login.module.css"
import GamepadIcon from "@/components/GamepadIcon"

export default function LoginPage() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const router = useRouter()

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real app, you would validate and authenticate here
    router.push("/store")
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

        <p className={styles.signupLink} onClick={() => router.push("/signup")}>
          Sign up
        </p>
      </div>
    </div>
  )
}
