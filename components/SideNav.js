import React from 'react'
import styles from '../styles/compo/Side.module.css'
import Link  from 'next/link'
import { useState } from 'react';
import { useRouter } from 'next/router';

const SideNav = () => {


  const router = useRouter();

  return (
    <div className={styles.navBar}>
    <ul className={styles.ul}>
    <li className={router.pathname == "/docs" ? styles.active : styles.li}><Link  href="/docs/introduction"><a className={styles.hov}> Introduction</a></Link> </li>
      <li className={router.pathname == "/docs/navBar" ? styles.active : styles.li}><Link  href="/docs/navBar"><a className={styles.hov}> header</a></Link> </li>
      <li className={router.pathname == "/docs/footer" ? styles.active : styles.li}><Link  href="/docs/footer"><a className={styles.hov}>footer</a></Link></li>
      <li  className={router.pathname == "/docs/some" ? styles.active : styles.li}><Link  href="/docs/some"><a className={styles.hov}>somes</a></Link></li>
      

    </ul>


  </div>
  )
}

export default SideNav