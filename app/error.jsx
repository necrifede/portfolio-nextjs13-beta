'use client'

import { useEffect } from 'react'
import styles from './error.module.css'

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className={styles.error}>
      <p>Oh no, something went wrong... </p>
      <p>Maybe refresh?</p>
    </div>
  )
}
