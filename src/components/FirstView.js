import React, { useState, useEffect, useRef } from 'react'
import styled, { keyframes } from 'styled-components'
import { HiChevronDoubleDown } from 'react-icons/hi'
import Confetti from 'confetti-react'
import Timer from 'react-compound-timer'
import Typed from 'typed.js'

import FrameImage from '../assets/imgs/frame.png'
const AniDown = keyframes`
    from{
        transform:translateY(-10px);
        opacity:.1;
    }
    to{
        opacity:1;
        transform:translateY(0);
    }
`
const StyledWrapper = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  background-image: url('https://i.imgur.com/BSq7edmh.jpeg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 769px) {
    background-attachment: fixed;
  }
  .box {
    z-index: 99;
    margin-top: 1.2rem;
    color: #000;
    padding: 0.5rem;
    background-color: #fff;
    border-radius: 0.4rem;
    box-shadow: 0 2px 8px #ccc;
    background-image: url(${FrameImage});
    background-repeat: no-repeat;
    background-size: 90%;
    background-position: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    filter: opacity(0.8);
    width: 3.8rem;
    height: 3.8rem;
    .title {
      font-family: 'Dancing Script', cursive;
      display: flex;
      font-size: 0.48rem;
      padding: 0.2rem 0;
      margin-bottom: 0.2rem;
      span {
        white-space: nowrap;
        strong {
          font-weight: bold;
          color: #be5678;
        }
      }
    }
    .date {
      display: flex;
      flex-direction: column;
      align-items: center;
      .time {
        font-size: 0.16rem;
        color: #999;
        margin-top: 0.12rem;
      }
      .countdown {
        font-weight: 800;
        font-size: 0.2rem;
        color: #666;
      }
    }
  }
  .down {
    position: absolute;
    width: 0.44rem;
    left: 50%;
    bottom: 0.1rem;
    margin-left: -0.22rem;
    animation-direction: alternate-reverse;
    animation: ${AniDown} 1s infinite;
  }
`
const now = new Date().getTime()
const deadline = new Date(1657299600000).getTime()
const initCountNum = deadline - now

export default function FirstView() {
  const [direction, setDirection] = useState(
    initCountNum > 0 ? 'backward' : 'forward'
  )
  const [size, setSize] = useState(null)
  const container = useRef(null)
  const el = useRef(null)
  // Create reference to store the Typed instance itself
  const typed = useRef(null)
  useEffect(() => {
    if (container) {
      setTimeout(() => {
        const { width, height } = getComputedStyle(container.current)
        setSize({ width, height })
      }, 500)
    }
  }, [])
  useEffect(() => {
    // elRef refers to the <span> rendered below
    typed.current = new Typed(el.current, {
      strings: [
        'Bọn mình<strong> sắp </strong>',
        'Bọn mình<strong> sắp </strong>',
        'Bọn mình<strong> sắp </strong>',
        'Bọn mình<strong> sắp </strong>cưới!'
      ],
      typeSpeed: 200,
      backSpeed: 50,
      backDelay: 1000,
      loop: true
    })

    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      typed.current.destroy()
    }
  }, [])
  return (
    <StyledWrapper ref={container}>
      {size && (
        <Confetti
          width={size.width}
          height={size.height}
          className="mask"
          recycle={true}
          numberOfPieces={99}
          wind={0.01}
          gravity={0.1}
          opacity={0.8}
          tweenDuration={8000}
        />
      )}
      <div className="box">
        <div className="title">
          💕<span ref={el}></span>💕
        </div>
        <div className="date">
          <div className="countdown">
            <Timer
              checkpoints={[
                {
                  time: 0,
                  callback: () => {
                    setDirection('forward')
                  }
                }
              ]}
              initialTime={initCountNum}
              direction={direction}
              formatValue={(value) => `${value < 10 ? `0${value}` : value}`}
            >
              <span className="num day">
                <Timer.Days /> ngày <Timer.Hours /> giờ <Timer.Minutes /> phút{' '}
                <Timer.Seconds /> giây{' '}
              </span>
            </Timer>
          </div>
          <div className="time">09 Tháng 07 Năm 2022</div>
        </div>
      </div>
      <HiChevronDoubleDown className="down" />
    </StyledWrapper>
  )
}
