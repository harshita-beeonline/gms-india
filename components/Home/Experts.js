"use client"
import React from 'react';
import styles from '../../styles/Experts.module.scss';
import { useRouter } from 'next/navigation';
const Experts = () => {
  const router = useRouter()
  return (
    <div className={styles['experts-content']}>
      <h2>At GMS, We Are Committed To Attaining Complete Product Efficacy By Streamlining Your Manufacturing Process.</h2>
      <button onClick={() => router.push("/contact")}>Talk to Our Experts</button>
    </div>
  )
}

export default Experts
