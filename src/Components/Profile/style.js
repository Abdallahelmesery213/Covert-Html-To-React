import styled  from 'styled-components';

export const ProfileSkills = styled.div ` 
    padding: 50px 0;
    overflow: hidden;
`

export const Profil = styled.div `
    width: 50%;
    float: left;
`
export const ProfileTitle = styled.h2 `
    font-size: 40px; 
    margin-bottom: 20px;
`
export const ProfTitSpan = styled.span `
font-weight: normal;
`
export const ProfileList = styled.ul `
    list-style: none;
    font-weight: bold;
`

export const ProfileItem = styled.li `
    margin-bottom: 8px
`

export const ProfSpan = styled.span `
    display: inline-block;
    width: 100px;
    font-weight: bold
`

export const SpanWeb = styled.span `
    font-weight: normal;
    color: #eb5424
`

export const SkillSection = styled.div `
    width: 50%;
    float: left;
`
export const SkillTitle = styled.h2 `
    font-size: 40px; 
    margin-bottom: 20px
`
export const SkillsDesc = styled.p `
    font-size: 15px;
    color: #888;
    line-height: 1.5;
    margin-bottom: 20px
`

export const Bar = styled.div `
    overflow: hidden;
    padding: 10px 0;
    margin-bottom: 10px;
    font-weight: bold
`

export const SpanTitle = styled.span `
    float: left;
`

export const Perc = styled.span `
    float: right;
    margin-right: 100px;
    
`

export const Parent = styled.div `
    height: 2px;
    clear: both;
    background: #fff;
    position: relative;
    top: 5px;
    
`

export const ParentSpan = styled.span `
    background: #eb5424;
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    bottom: 0;
    width: ${props => props.spn==="sp1" ? "100%" : ""};
    width: ${props => props.spn==="sp2" ? "90%" : ""};
    width: ${props => props.spn==="sp3" ? "70%" : ""};
`




// .profile_skills .profile .profile-title span,
// .profile_skills .skills .skills-title span{
//     font-weight: normal;
// }

// @media (max-width:768px) {
//     .profile_skills .profile , 
//     .profile_skills .skills {
//         width: 100%;
//         float: none
//     }
//     .profile_skills .profile {
//         margin-bottom: 20px
//     }
// }
