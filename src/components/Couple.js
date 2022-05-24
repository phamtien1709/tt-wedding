import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import Title from './SectionTitle'
import FrameImage from '../assets/imgs/frame.png'

const StyledWrapper = styled.section`
  width:100%;
  background-color: #fff;
  padding:.3rem 0;
  .cp{
    display: flex;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 414px) {
        flex-direction: column;
        margin:0;
    }
      .profile{
          color: #222;
          padding:.4rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          margin-right: inherit.4rem;
          .pic{
              width: 2.8rem;
              height: 2.8rem;
              background-repeat: no-repeat;
              background-size:80%,100%;
              background-position: center;
              overflow: hidden;
              &.boy{
                background-image: url('https://g-store.oss-cn-beijing.aliyuncs.com/works/wedding/w4.png?x-oss-process=image/resize,w_400'),url(${FrameImage});
                background-size:75%,100%;
                background-position-y: 5px;
              }
              &.girl{
                background-image: url('https://g-store.oss-cn-beijing.aliyuncs.com/works/wedding/w1.png?x-oss-process=image/resize,w_400'),url(${FrameImage});
              }
              img{
                  width: 100%;
                  height: 100%;
              }
          }
          .name{
            font-family: 'SP-F';
              font-size: .4rem;
              padding:.2rem 0;
              margin: .2rem 0;
          }
          .intro{
            font-size: .12rem;
            white-space: nowrap;
          }
      }

  }
`;
const tips = {
    h: {
        m: '右面',
        w: '左面'
    },
    v: {
        m: '下面',
        w: '上面'
    }
}
export default function Couple({ popupDan }) {
    const [pos, setPos] = useState('h')
    useEffect(() => {
        if (window.innerWidth <= 414) {
            setPos('v')
        }
    }, []);
    const handleDC = () => {
        popupDan("双击666")
    }
    return (
        <StyledWrapper>
            <Title title="Cô dâu · Chú rể" />
            <div className="cp">
                <div className="profile">
                    <div className="pic boy" onDoubleClick={handleDC}>
                        <img src={FrameImage} alt="man" />
                    </div>
                    <div className="name">Pham Tien🤵🏻</div>
                    <div className="intro">Có 3 thứ tôi cần: nước, không khí, và{tips[pos].m}người phụ nữ đó</div>

                </div>
                <div className="profile">
                    <div className="pic girl" onDoubleClick={handleDC}>
                        <img src={FrameImage} alt="man" />
                    </div>
                    <div className="name">Ha Thanh👰🏻</div>
                    <div className="intro">Có 3 thứ tôi cần: nước, không khí, và{tips[pos].w}người đàn ông đó</div>

                </div>
            </div>
        </StyledWrapper>
    )
}
