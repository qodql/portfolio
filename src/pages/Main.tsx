import Header from '@/components/Header'
import React from 'react'
import MainCss from '@/styles/Main.module.scss'
import Test from '@/components/test'
import styles from '@/styles/Test.module.scss';

const Main = () => {
  return (
    <>
        <Header/>
        <main className={MainCss.main}>
            <Test>
            <section id={MainCss.intro}>
                <div className={MainCss.particle}>
                    <img src='./img/img-inttro-particle01.svg'/>
                    <img src='./img/img-inttro-particle02.svg'/>
                    <img src='./img/img-inttro-particle03.svg'/>
                    <img src='./img/img-inttro-particle04.svg'/>
                    <img src='./img/img-inttro-particle05.svg'/>
                </div>
                <article className={MainCss['intro-title']}>
                    <h2>프론트엔드</h2>
                    <h2>포트폴리오</h2>
                </article>
                <div className={MainCss['intro-container']}>
                    <article className={MainCss['intro-profile']}>
                        <div className={MainCss['intro-profile-box']}>
                            <img></img>
                            <span>?</span>
                        </div>
                        <p>윤경빈</p>
                    </article>
                    <div className={MainCss['intro-contents']}>
                        <div className={MainCss['intro-content']}>
                            <span>수료</span>
                            <div>
                                <h5>프론트엔드 웹&앱 SW 개발자 양성과정</h5>
                                <p>2024.05 ~ 2024.11</p>
                            </div>
                            <ul>
                                <li>React, Next.js, Vue.js를 활용한 동적 웹 페이지 구축</li>
                                <li>Git을 활용한 버전 관리 및 협업 개발 환경 이해</li>
                                <li>Node.js와 Express.js를 활용한 간단한 서버 구축 및 클라이언트-서버 통신</li>
                                <li>Firebase와 Next.js를 활용한 서버리스 웹 애플리케이션 구축</li>
                            </ul>
                        </div>
                        <div className={MainCss['intro-content']}>
                            <span>근무</span>
                            <div>
                                <h5>(주)필코리아테크놀로지</h5>
                                <p>2021.06 ~ 2024.02</p>
                            </div>
                            <ul>
                                <li>웹사이트 및 애플리케이션 UI 디자인</li>
                                <li>Adobe XD, Figma를 활용한 프로토타입 제작</li>
                                <li>카페24 플랫폼을 활용한 자사 웹사이트 유지보수 및 콘텐츠 관리</li>
                                <li>구글 애널리틱스를 활용한 방문자 분석 및 개선 작업</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            </Test>
            <section id={MainCss.about}></section>
            <section id={MainCss.skills}></section>
        </main>
    </>
  )
}

export default Main