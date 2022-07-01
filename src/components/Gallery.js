import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import LightGallery from 'lightgallery/react'
import 'lightgallery/css/lightgallery.css'
import 'lightgallery/css/lg-zoom.css'
import 'lightgallery/css/lg-thumbnail.css'
import 'lightgallery/css/lg-transitions.css'

// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail'
import lgZoom from 'lightgallery/plugins/zoom'

import Title from './SectionTitle'
const Loading = styled.div`
  font-size: 0.24rem;
  padding: 0.4rem 0.2rem;
  text-align: center;
	font-family: Open Sans;
`
const StyledWrapper = styled.section`
  min-height: 50vh;
  width: 100%;
  background-color: #fff;
  padding: 0.3rem 0;
  .wrapper {
    width: 100%;
    padding: 0;
    max-height: 80vh;
    overflow: scroll;
    .lg-react-element {
      column-count: 5;
      @media screen and (max-width: 1500px) {
        column-count: 4;
      }
      @media screen and (max-width: 768px) {
        column-count: 3;
      }
      column-gap: 0.14rem;
      .picture {
        cursor: pointer;
        max-width: 300px;
        margin: 0 auto 5px auto;
        img {
          border: 2px solid #ccc;
          width: 100%;
          border: 5px;
        }
      }
    }
    @media screen and (max-width: 414px) {
      padding: 0 0.02rem;
      .lg-react-element {
        column-count: 3;
        .picture img {
          border: none;
        }
      }
    }
  }
  .btns {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 0.1rem;
    .group {
      display: flex;
      .btn {
        background-color: #eee;
        margin: 0;
        transition: all 0.6s ease-in-out;
        cursor: pointer;
        border: none;
        font-size: 0.18rem;
        padding: 0.08rem 0.2rem;
        &:first-child {
          padding-left: 0.3rem;
          border-top-left-radius: 30px;
          border-bottom-left-radius: 30px;
        }
        &:last-child {
          padding-right: 0.3rem;
          border-top-right-radius: 30px;
          border-bottom-right-radius: 30px;
        }
        &.curr {
          color: #fff;
          background-color: green;
        }
      }
    }
  }
`
const WEDDINGS = [
  'https://i.imgur.com/s0hVJTC.jpeg',
  'https://i.imgur.com/TLb10ya.jpeg',
  'https://i.imgur.com/DKDUvTE.jpeg',
  'https://i.imgur.com/U3U6SzN.jpeg',
  'https://i.imgur.com/JpFPH23.jpeg',
  'https://i.imgur.com/YgWliEM.jpeg',
  'https://i.imgur.com/RwF093i.jpeg',
  'https://i.imgur.com/GYJF0rB.jpeg',
  'https://i.imgur.com/Pp8o9qs.jpeg',
  'https://i.imgur.com/c9WQPdh.jpeg',
  'https://i.imgur.com/iYzAcmm.jpeg',
  'https://i.imgur.com/js94fRD.jpeg',
  'https://i.imgur.com/kQunw7I.jpeg',
  'https://i.imgur.com/vEHZG8d.jpeg',
  'https://i.imgur.com/vzGrlkC.jpeg',
  'https://i.imgur.com/GuL5bSO.jpeg',
  'https://i.imgur.com/di5OjYt.jpeg',
  'https://i.imgur.com/ZJckVqU.jpeg',
  'https://i.imgur.com/oGTckhT.jpeg',
  'https://i.imgur.com/5mqrN4K.jpeg',
  'https://i.imgur.com/2FNpeqC.jpeg',
  'https://i.imgur.com/8Gyrzcl.jpeg',
  'https://i.imgur.com/mcdijlh.jpeg',
  'https://i.imgur.com/a4qk8SC.jpeg',
  'https://i.imgur.com/PAD5BhI.jpeg',
  'https://i.imgur.com/EEBUVgY.jpeg',
  'https://i.imgur.com/q69am7t.jpeg',
  'https://i.imgur.com/59qNmby.jpeg',
  'https://i.imgur.com/h51Pyjt.jpeg',
  'https://i.imgur.com/JELhYsp.jpeg',
  'https://i.imgur.com/5wMe6kj.jpeg'
]
const DAILIES = [
  'https://i.imgur.com/jzDkr8L.jpeg',
  'https://i.imgur.com/lvyLwtv.jpeg',
  'https://i.imgur.com/RjmPYbE.jpeg',
  'https://i.imgur.com/94l9v2y.jpeg',
  'https://i.imgur.com/7JhiwXn.jpeg',
  'https://i.imgur.com/ECwEMZH.jpeg',
	'https://i.imgur.com/JdSvP07.jpeg',
	'https://i.imgur.com/gwnma8F.png',
	'https://i.imgur.com/sIUJ2Ct.jpeg',
	'https://i.imgur.com/EBtRoeG.jpeg',
	'https://i.imgur.com/t4VJW0m.jpeg',
	'https://i.imgur.com/cyNdG3P.jpeg',
	'https://i.imgur.com/YtbB875.jpeg',
	'https://i.imgur.com/zGm4xUN.jpeg',
	'https://i.imgur.com/3Pcke9f.jpeg',
	'https://i.imgur.com/WOg4nSA.png',
	'https://i.imgur.com/dGxfqyt.jpeg',
	'https://i.imgur.com/lAnEXTT.jpeg',
	'https://i.imgur.com/s4OC6bs.jpeg',
	'https://i.imgur.com/laT30tp.jpeg',
	'https://i.imgur.com/YH4dF0b.jpeg',
	'https://i.imgur.com/sFhMDjN.jpeg',
	'https://i.imgur.com/kKscIRm.jpeg',
	'https://i.imgur.com/xERbIFj.jpeg',
	'https://i.imgur.com/DwaAQRp.jpeg',
	'https://i.imgur.com/5f13NpO.png',
	'https://i.imgur.com/rrWTiEA.png',
	'https://i.imgur.com/Az1uM8t.png',
	'https://i.imgur.com/gMyZsYI.png',
	'https://i.imgur.com/J5sMWnd.jpeg',
	'https://i.imgur.com/IY8KyOF.png',
	'https://i.imgur.com/qjAXnXM.png',
	'https://i.imgur.com/hUu0R9q.jpeg',
	'https://i.imgur.com/Jbx1BLZ.jpeg',
	'https://i.imgur.com/el2814j.png',
	'https://i.imgur.com/IKcaXRZ.png',	
]

const GalleryInstance = ({ popupDan, cate = 'wedding', photos = [] }) => {
  const viewCount = useRef(0)
  const title = {
    wedding: 'Ảnh cưới TT',
    dailys: 'Ảnh thường ngày TT'
  }
  const [reiniting, setReiniting] = useState(false)
  console.log({ photos })
  const onInit = (detail) => {
    console.log('lightGallery has been initialized', detail)
  }
  const handleSlideAfter = () => {
    viewCount.current = viewCount.current + 1
    console.log(viewCount.current)
  }
  const handleLgClose = () => {
    console.log('lg close')
    if (viewCount.current >= 20) {
      popupDan('Kỷ niệm dài')
    }
  }
  const handleLgOpen = () => {
    viewCount.current = 0
  }
  useEffect(() => {
    setReiniting(true)
    const inter = setTimeout(() => {
      setReiniting(false)
    }, 1000)
    return () => {
      clearTimeout(inter)
    }
  }, [photos])
  return reiniting ? (
    <Loading>Đang tải...</Loading>
  ) : (
    <LightGallery
      onAfterClose={handleLgClose}
      onAfterOpen={handleLgOpen}
      onAfterSlide={handleSlideAfter}
      mode={cate == 'wedding' ? 'lg-zoom-in-big' : 'lg-slide-vertical-growth'}
      onInit={onInit}
      speed={500}
      plugins={[lgThumbnail, lgZoom]}
    >
      {photos.map((photo) => {
        return (
          <div
            key={photo}
            className="picture"
            data-sub-html={`<h4>${title[cate]}</h4>`}
            data-src={
              photo.includes('https://')
                ? photo
                : `https://g-store.oss-cn-beijing.aliyuncs.com/works/wedding/${photo}.png?x-oss-process=image/resize,w_1200`
            }
          >
            <img
              src={
                photo.includes('https://')
                  ? photo.replace('.jpeg', 'l.jpeg')
                  : `https://g-store.oss-cn-beijing.aliyuncs.com/works/wedding/${photo}.png?x-oss-process=image/resize,w_300`
              }
            />
          </div>
        )
      })}
    </LightGallery>
  )
}
export default function Gallery({ popupDan }) {
  const [cate, setCate] = useState('wedding')
  const [photos, setPhotos] = useState(WEDDINGS)

  const handleCateClick = (evt) => {
    const { cate } = evt.target.dataset
    setCate(cate)
    setPhotos(cate == 'wedding' ? WEDDINGS : DAILIES)
  }
  return (
    <StyledWrapper>
      <Title title="Thư viện kỷ niệm" />
      <div className="btns">
        <div className="group">
          <button
            className={`btn ${cate == 'wedding' ? 'curr' : ''}`}
            data-cate="wedding"
            onClick={handleCateClick}
          >
            Wedding
          </button>
          <button
            className={`btn ${cate == 'dailys' ? 'curr' : ''}`}
            data-cate="dailys"
            onClick={handleCateClick}
          >
            Daily
          </button>
        </div>
      </div>
      <div className="wrapper">
        <GalleryInstance cate={cate} photos={photos} popupDan={popupDan} />
      </div>
    </StyledWrapper>
  )
}
