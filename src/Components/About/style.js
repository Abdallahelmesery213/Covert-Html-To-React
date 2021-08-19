import styled  from 'styled-components';
import imge from '../../images/about-bg.jpg'
export const Creative = styled.div `
    height: 500px;
    background-image:url(${imge});
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    padding: 10px;
    @media (max-width:991px) {
            height: auto
        }
`

export const CreativeInfo = styled.div `
    padding-top: 100px;
    width: 50%;
    float: right;
    @media (max-width:991px) {
        width: 100%;
        padding-top: 10px;
        float: none
    }

`

export const InfoTitle = styled.h2 `
    font-weight: bold;
    font-size: 50px;
    margin-top: 0;
`

export const InfoSpan = styled.span `
    font-weight: bold
`

export const InfoDir = styled.h4`
    font-size: 40px;
    color: #eb5424;
    margin-bottom: 20px;
    @media (max-width:991px) {
        font-size: 30px
    }
`

export const Desc = styled.p `
    color: #000;
    margin-bottom: 15px;
    line-height: 1.8;
    font-weight : bold
`

export const DescLink =styled.a `
    text-decoration: none
`
