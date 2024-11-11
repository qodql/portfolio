import Header from '@/components/Header'
import React from 'react'
import MainCss from '@/styles/Main.module.scss'

const Main = () => {
  return (
    <>
        <Header/>
        <main className={MainCss.main}>
            <section id={MainCss.intro}>
                <div className={MainCss.particle}></div>
                <article className={MainCss['intro-title']}>
                    <h2>프론트엔드</h2>
                    <h2>포트폴리오</h2>
                </article>
                <div className={MainCss['intro-container']}>
                    <article className={MainCss['intro-profile']}>
                        <img></img>
                        <p></p>
                    </article>
                    <div className={MainCss['intro-contents']}>
                        
                    </div>
                </div>
            </section>
            <section id={MainCss.about}></section>
            <section id={MainCss.skills}></section>
        </main>
    </>
  )
}

export default Main