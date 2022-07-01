import React from 'react'
import styled, { keyframes } from 'styled-components';

import step1 from '../assets/imgs/step1.png'
import step2 from '../assets/imgs/step2.jpg'
import step3 from '../assets/imgs/step3.jpeg'
import Title from './SectionTitle'


const AniBeating = keyframes`
    from{
        opacity:.1;
    }
    to{
        opacity:1;
    }
`
const StyledWrapper = styled.section`
  width:100%;
  background-color: #eee;
  padding:.3rem 0;
  .tl{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    .items{
        overflow-y: scroll;
        overflow-x: hidden;
        display: flex;
        flex-direction: column;
        .item{
            display: flex;
            align-items: center;
            margin-bottom: .4rem;
            .content{
                position: relative;
                background-color: #fff;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                border:1px solid #eef;
                padding:.2rem;
                border-radius: .12rem;
                width: 4rem;
                .title{
                    font-size: .3rem;
										font-family: Dancing Script;
                }
                .date{
                    margin:.1rem 0;
                    font-style:oblique;
                    font-size: .12rem;
                    color:#666;
										font-family: Open Sans;
                }
                .desc{
                    height: 1.5rem;
                    overflow: scroll;
                    line-height: 1.5;
                    margin-top: .12rem;
                    font-size: .15rem;
                    display: flex;
                    flex-direction: column;
										font-family: Open Sans;
                    span{
                        margin-bottom: .1rem;
                    }
                }
            }
            &:nth-child(even){
                flex-direction: row-reverse;
            }
            .heart{
                margin:0 .2rem;
                font-size: .3rem;
                animation: ${AniBeating} 1s ease-in-out infinite;
                animation-direction:alternate;
                animation-delay: inherit;
            }
            .pic{
                position: relative;
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 0;
                img{
                    z-index: 8;
                    border-radius: 50%;
                    border:3px solid #999;
                    width:2rem;
                    height: 2rem;
                    object-fit: cover;
                }
            }
            @media screen and (max-width: 414px) {
                flex-direction:column-reverse;
                .heart{
                    margin:.2rem 0;
                }
                &:nth-child(even){
                    flex-direction: column-reverse;
                }
            }
        }
    }
  }
`;
const items = [{
    title: "Beginning: Lần gặp đầu tiên ~",
    datetime: "09/12/2020 - Bếp Nhà Mình",
    desc: `<span>Một buổi tối mùa đông lạnh lẽo, cô ấy đang cảm thấy cô đơn, tình cờ tôi là người được biết đầu tiên.</span><span>Hôm đó chúng tôi đã nói chuyện rất lâu, cảm thấy có quá nhiều điều để nói, ăn uống suốt 3 tiếng đồng hồ ~</span><span>Dù đã biết nhau từ trước, nhưng đây là lần tán gẫu với nhau lâu đến thế. Sự thân quen và bỡ ngỡ này đã khiến chúng tôi xích lại gần nhau hơn từng chút một...</span>`,
    picture: step1,
}, {
    title: "Serious: Bước vào mối quan hệ nghiêm túc ~",
    datetime: "08/03/2021 - @nguoiyeutoilacoder",
    desc: `<span>Mũi tên của thần Cupid bắn trúng chúng tôi, và không khí có mùi như kiểu bánh đậu xanh :))).</span>
    <span>Cả hai đều yêu thiên nhiên và thích ra ngoài đường ngắm đủ mọi thứ.</span>
    <span>Hai đứa đi lòng vòng quanh Hồ Tây, Hồ Hoàn Kiếm,.. nhiều lúc chẳng vì lý do gì cả. Chỉ là đi với nhau là được.</span>
    <span>Hai đứa cũng đi Tam Đảo, như bao người khác. Thích cái không khí se lạnh, hai bàn tay đan siết vào nhau. Một vài cái ôm nồng ấm cũng giúp xóa đi cái lạnh của tiết trời.</span>
    <span>Hai đứa thích nghe nhạc, hầu hết albums Spotify cô ấy thích, đều nằm trong Mục Yêu Thích của tôi. Hát vu vơ cùng nhau, ê a những bài hát quên lời.</span>
    <span>Cùng nhau chia sẻ mọi thứ, từ công việc đến đời sống, các mối quan hệ cũng như cách phát triển bản thân. Đồng hành, cùng tìm cho nhau một lối đi chung.</span>
    <span>Đứa con tinh thần đầu tiên được sinh ra và được nhiều người biết đến. Tiktok "<a href="https://www.tiktok.com/@nguoiyeutoilacoder">Người yêu tôi là Coder</a>" tính đến nay đã có 23 triệu views, 13.200 Followers và 168.000 lượt thích. Một niềm tự hào, kết quả dành cho sự cố gắng của hai đứa.</span>
    <span>Tôi lý trí, cô ấy tình cảm.</span>
    <span>Tôi là một người thù dai, cô ấy là một người hay quên.</span>
    <span>Tôi thích nói một cách gay gắt khi tức giận, và cô ấy không thích nói khi cô ấy tức giận.</span>
    <span>Một mối quan hệ tốt đẹp là kết quả của sự hòa hợp, chúng tôi sẵn sàng dành tình yêu và năng lượng cho nhau, và luôn cảm thấy biết ơn vì đã có nhau!</span>`,
    picture: step2,
}, {
    title: "Together: Về chung một nhà ~",
    datetime: "03.03.2022",
    desc: `<span>Dù là thuê nhà hay mua nhà, chỉ cần trái tim bạn thuộc về, thì nhà luôn là nơi để về.</span>
    <span>Sau khi chung sống, chúng tôi đã có một tổ ấm của riêng mình và một căn bếp nhỏ. Hàng ngày nấu những bữa ăn ngon và cùng nhau thưởng thức.</span>
    <span>Tự tay sắm những món đồ, từ những thứ nhỏ nhất,. đến những thứ "to hơn một chút" mà trước đó chưa có ai trong hai đứa có thể nghĩ đến.</span>
		<span>Đó là một niềm vui từ tận đáy lòng của tôi khi thấy một căn hộ nhỏ trở thành những gì chúng tôi muốn.</span>
    <span>Sau khi chung sống, tất nhiên những xích mích trong cuộc sống là điều không thể tránh khỏi.</span>
    <span>May mắn thay, mỗi khi cãi vã, chúng tôi có thể bình tĩnh và xem xét lại kịp thời, đồng thời học cách bày tỏ cảm xúc của mình, từ đó điều chỉnh cho phù hợp với nhau.</span>
    <span>Có lẽ trong thâm tâm tôi, chúng tôi đã kết hôn từ lâu, và đây đã trở thành cuộc sống hàng ngày của chúng tôi.</span>
    <span>Chúng tôi sẽ trân trọng nhau hơn nữa trong tương lai và chăm sóc cho mối quan hệ này ~ Chúng tôi sẽ chia sẻ tất cả những niềm vui và những khó khăn, cùng nhau cố gắng vì tương lai tươi sáng của chúng tôi!</span>`,
    picture: step3,
}]
function createMarkup(html) {
    return { __html: html };
}

export default function Couple() {
    return (
        <StyledWrapper>
            <Title title="Câu chuyện của chúng mình" />
            <div className="tl">
                <ul className="items">
                    {items.map(({ title, datetime, desc, picture }, idx) =>
                        <li key={title} className="item">
                            <div className="pic">
                                <img src={picture} alt="picture" />
                            </div>
                            <i className="heart">💓</i>
                            <div className="content" style={{ animationDelay: `0.${idx * 5}s` }}>
                                <h4 className="title">{title}</h4>
                                <time className="date">{datetime}</time>
                                <p className="desc" dangerouslySetInnerHTML={createMarkup(desc)}></p>
                            </div>

                        </li>
                    )}
                </ul>
            </div>
        </StyledWrapper>
    )
}
