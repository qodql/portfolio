import React from 'react';
import { useInView } from 'react-intersection-observer';
import styles from '../styles/Test.module.scss';

interface AnimatedSectionProps {
  children: React.ReactNode;
}

const Test: React.FC<AnimatedSectionProps> = ({ children }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // 요소가 처음 화면에 나타날 때만 애니메이션 실행
    threshold: 0.2,    // 20%가 화면에 나타나면 애니메이션 시작
  });

  return (
    <div
      ref={ref}
      className={`${styles['animate-fade-out']} ${inView ? styles['animate-fade-in'] : ''}`}
    >
      {children}
    </div>
  );
};

export default Test;
