import React from 'react'
import HeaderCss from '@/styles/Header.module.scss'

const Header = () => {
  return (
    <header className={HeaderCss.header}>
        <div className={HeaderCss['header-inner']}>
            <div className={HeaderCss['logo-container']}>
                <a href="/">
                    <h1></h1>
                </a>
            </div>
            <nav className={HeaderCss.nav}>
                <a href='#'>인터뷰</a>
                <a href='#'>기술</a>
                <a href='#'>프로젝트</a>
            </nav>
        </div>
    </header>
  )
}

export default Header