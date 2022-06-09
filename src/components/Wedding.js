import React from 'react'
import styled from 'styled-components';
import Title from './SectionTitle'
import WeddingImage from '../assets/imgs/wedding.png'
import Map1Image from '../assets/imgs/map.xiaoqu.png'
import Map2Image from '../assets/imgs/map.hotel.png'

const StyledWrapper = styled.section`
z-index: 1;
position: relative;
  width:100%;
  background-color: #fff;
  padding:.3rem 0;
  background: url(${WeddingImage});
  background-repeat: no-repeat;
    background-size:cover;
    background-position: center;
    &:after{
        /* content: ""; */
        position: absolute;
        top:0;
        left:0;
        width:100%;
        height: 100%;
        background-color: rgba(2,2,2,.3);
    }
  .wrapper{
      margin: .2rem auto;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
      .box{
          min-height: 4.4rem;
          width: 4rem;
            background-color: rgba(2,2,2,.5);
            z-index: 9;
          color: #fff;
          padding:.25rem .5rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          font-size: .2rem;
          border-radius: 5px;
          /* border: 2px solid rgba(2,2,2,.5); */
          &:first-child{
              margin:0 0.25rem 0 0;
          }
          @media screen and (max-width: 768px) {
            &:first-child{
                margin: 0 0 0.25rem 0;
            }
          }
          .title{
              font-size: .3rem;
              width:100%;
              text-align: center;
            border-bottom: 1px solid rgba(222,222,222,.4);
            padding-bottom: .2rem;
          }
          .items{
              width: 100%;
              display: flex;
              flex-direction: column;
              align-items: flex-start;
              margin:.2rem 0;
              .item{
                font-size: .22rem;
                  display: flex;
                  align-items: flex-start;
                  margin:.1rem 0;
                 
                  .label{
                      color:#ccc;
                      white-space: nowrap;
                      &:after{
                          content:"：";
                      }
                  }
                  .txt{
                    white-space: nowrap;
                    font-weight: 800;
                      &.loc{
                          display: flex;
                          flex-direction: column;
                          .map{
                              margin-top: .12rem;
                              width:2.4rem;
                              height:2.4rem;
                              img{
                                  width:100%;
                                  height: 100%;
                                  border: 1px solid #ccc;
                                    border-radius: 10px;
                              }
                              &:hover img{
                                box-shadow: 0px 1px 20px black;
                              }
                          }
                      }
                  }
                  @media screen and (max-width: 768px) {
                        flex-direction: column;
                        .label{
                            margin-bottom: .12rem;
                        }
                    }
              }
          }
      }

  }
`;
export default function Wedding() {
    return (
        <StyledWrapper>
            <Title title="Lễ cưới" />
            <div className="wrapper">
                <div className="box">
                    <h3 className="title">Nhà trai</h3>
                    <ul className="items">
                        <li className="item"><span className="label">Thời gian</span><span className="txt">2022.07.17 10:00（sáng）</span></li>
                        <li className="item">
                            <span className="label">Tại</span>
                            <div className="txt loc">
                                <span>
                                    TT Tiệc cưới Khoa Thanh, tiểu khu 4 Thị trấn Mai Châu.
                                </span>
                                <a className="map" href={'https://j.map.baidu.com/ab/FGQJ'}>
                                    <img src={Map2Image} alt="map" />
                                </a>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="box">
                    <h3 className="title">Nhà gái</h3>
                    <ul className="items">
                        <li className="item"><span className="label">Thời gian</span><span className="txt">2021.09.15 11:00 - 14:00</span></li>
                        <li className="item">
                            <span className="label">Tại</span>
                            <div className="txt loc">
                                <span>
                                    Thôn Thạch Đà, huyện Mê Linh, Thành phố Hà Nội
                                </span>
                                <a className="map" href={'https://j.map.baidu.com/19/OhRJ'}>
                                    <img src={Map1Image} alt="map" />
                                </a>
                            </div>
                        </li>
                    </ul>
                </div>

            </div>
        </StyledWrapper>
    )
}
