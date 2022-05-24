import { createGlobalStyle } from 'styled-components';

const CommonStyle = createGlobalStyle`
 html{
     font-size: 100px;
 }
 html,body{
    overflow-x: hidden;
    overflow-y: scroll;
    &::-webkit-scrollbar{
        display: none;
    }
 }
 @media screen and (min-width: 1681px) {
    html {
        font-size:120px
    }
}
 @media screen and (max-width: 1680px) {
    html {
        font-size:100px
    }
}

@media screen and (max-width: 736px) {
    html {
        font-size:80px
    }
}

@media screen and (max-width: 414px) {
    html {
        font-size:60px
    }
}
@font-face{
    font-family: 'Dancing Script', cursive;
    src:url(https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;500;600;700&display=swap);
    font-style: normal;
    font-weight: normal;
}
`;

export default CommonStyle;