"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import styles from "./signup.module.css"
import GamepadIcon from "@/components/GamepadIcon"

export default function SignupPage() {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const router = useRouter()

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real app, you would validate and create account here
    router.push("/login")
  }

  return (
    <div className={styles.signupContainer}>
      <div className={styles.signupCard}>
        <div className={styles.signupIcon}>
          <GamepadIcon />
        </div>
        <h1>Sign Up</h1>
        <p className={styles.signupSubtitle}>Create your account</p>

        <form onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
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

          <div className={styles.inputGroup}>
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className={styles.signupButton}>
            Create Account
          </button>
        </form>

        <p className={styles.loginLink} onClick={() => router.push("/login")}>
          Already have an account? Log in
        </p>
      </div>
    </div>
  )
}
