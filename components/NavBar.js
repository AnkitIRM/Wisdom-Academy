import React from 'react'
import styles from '../styles/compo/Nav.module.css'
import Image from 'next/image'
import { useState } from 'react';

import Head from 'next/head';
// import Nprogress from "nprogress"

// import styl from '../node_modules/nprogress/nprogress.css'
 

import Link from 'next/link';
import { useRouter } from 'next/router';



// Nprogress.configure({ showSpinner: false });

const NavBar = () => {

 
  const router = useRouter();

  // Router.events.on('routeChangeStart',()=>{
  //   Nprogress.start();
    
  // });
  
  // Router.events.on('routeChangeComplete',()=>{
  //   Nprogress.done();
   
  // });



  const [opened, setOpened] = useState(false);
  const title = opened ? 'Close navigation' : 'Open navigation';


  
  const [ khula , setKhula] = useState(false)




  function burgerFunc(){
  
   
    khulaband();

  }
  function mantine(){
    () => setOpened((o) => !o);
  }

 
  function khulaband(){
    setKhula(!khula);
  }
  return (
    <>
    <Head>
      {/* <link rel="stylesheet" href={styl} /> */}
    
    
    </Head>
    <nav className={styles.header}>


      <div className={styles.navBar}>
        {/* blue = #1e2e66 */}
        {/* lightblue = #53c2f0 */}

        <div className={styles.leftContainer}>
          <Image src="/Screenshot2 (108).png" width="50px" height="50px" alt='error'/>
          WISDOM ACADEMY
        </div>



        {/* <Image className={styles.mast}src="/vercel.svg" width={100} height={60}></Image> */}

        <div id='midContainer' className={khula ? styles.mobileListBlock : styles.midContainer}>
          <ul className={styles.ul}>
            <li className={router.pathname == "/" ? styles.active : styles.li}><Link href="/"><a className={styles.hov}> Home</a></Link></li>
            <li className={router.pathname == "/student" ? styles.active : styles.li}><Link href="/student"><a className={styles.hov}>Student</a></Link></li>
            <li className={router.pathname == "/material" ? styles.active : styles.li}><Link href="/material"><a className={styles.hov}>Material</a></Link></li>
            <li className={router.pathname == "/support" ? styles.active : styles.li}><Link href="/support"><a className={styles.hov}>Support</a></Link></li>
           <div className={styles.listbtn}>
           <button className={styles.btnL}>Log in</button>
          <button className={styles.btn2L}>Sign up</button>

            </div>
          </ul>
        </div>
        <div className={styles.rightContainer}>

          <button className={styles.btn}>Log in</button>
          <button className={styles.btn2}>Sign up</button>
          <div className={khula ? styles.menu : styles.menuToggle} onClick={() => setOpened((o) => !o) & burgerFunc()}>


          </div>


        </div>

        {/* <div className={styles.hamBurger}>
      <Burger
        id='burger'
        khula = {khula}
        opened={opened}
        onClick={() => setOpened((o) => !o)&burgerFunc()}
        
        title={title}
      />
    </div> */}


      </div>
      {/* <div className={khula? styles.mobileListBlock : styles.mobileList}>
      <ul className={styles.ul}>
          <li className={styles.li}><Link href="/">Home</Link></li>
          <li className={styles.li}><Link href="/about">about</Link></li>
          <li className={styles.li}><Link href="/about">about</Link></li>
          <li className={styles.li}><Link href="/about">about</Link></li>
        </ul>
      </div> */}
    </nav></>

  )
}

export default NavBar