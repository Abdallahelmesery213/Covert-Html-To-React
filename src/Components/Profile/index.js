
import React from 'react';
import axios from 'axios';
import data from '../../data.json'

import {ProfileSkills,Profil,ProfileTitle,ProfileList,ProfileItem,ProfSpan,SpanWeb,SkillSection,SkillTitle,SkillsDesc,Bar,SpanTitle,Perc,Parent,ParentSpan} from './style.js';

class Profile extends React.Component {
    state = {
        profile : []
    }
    componentDidMount () {
        axios.get( `${data}`).then(res => {this.setState({profile:res.data.profile})})
    }
    render() {
        const profile = data.profile;
        const profList = profile.map( (item) => {
            return (
                <Bar key={item.id}>
                        <SpanTitle>{item.title}</SpanTitle>
                        <Perc>{item.perct}</Perc>
                        <Parent>
                            <ParentSpan spn={item.spn}></ParentSpan>
                        </Parent>
                </Bar>
            )
        })
    return ( 
        <ProfileSkills>
            <div className="container">
                <Profil>
                    <ProfileTitle>My <ProfSpan>Profile</ProfSpan> </ProfileTitle> 
                    <ProfileList>
                        <ProfileItem>
                            <ProfSpan>Name</ProfSpan>
                            Abdallah Elmesery
                        </ProfileItem>
                        <ProfileItem>
                            <ProfSpan>Birthday</ProfSpan>
                            21/3/1998
                        </ProfileItem>
                        <ProfileItem>
                            <ProfSpan>Address</ProfSpan>
                            Mahalla
                        </ProfileItem>
                        <ProfileItem>
                            <ProfSpan>Phone</ProfSpan>
                            01128997936
                        </ProfileItem>
                        <ProfileItem>
                            <ProfSpan>Email</ProfSpan>
                            abdallahelmesery@gmail.com
                        </ProfileItem>
                        <ProfileItem>
                            <ProfSpan>Website</ProfSpan>
                            <SpanWeb>www.google.com</SpanWeb>
                        </ProfileItem>
                    </ProfileList>
                </Profil>
                
                <SkillSection>
                    <SkillTitle>Some <span>skills</span></SkillTitle>
                    <SkillsDesc>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis similique.
                    </SkillsDesc>

                    {profList}
                    
                    
                </SkillSection>
                
            </div>
        </ProfileSkills>
    );
}
}
export default Profile;