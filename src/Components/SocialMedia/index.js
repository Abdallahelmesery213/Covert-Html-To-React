
import React from 'react';
import axios from 'axios';
import {SocialSection , Social , Icon , Prag , Span1,Span2} from './style';
class SocialMedia extends React.Component {
    state = {
        social : []
    }
    componentDidMount () {
        axios.get('js/data.json').then(res => {this.setState({social:res.data.social})})
    }
    render () {
        const {social} = this.state;
        const socialList = social.map ( (item) => {
            return (
                <Social key={item.id} itm={item.id}>
                <Icon className={item.icon}></Icon>
                <Prag>
                    <Span1>{item.title}</Span1>
                    <Span2>{item.body}</Span2>
                </Prag>
                </Social>
            )
        } )
    return ( 
        <SocialSection>
            
            {socialList}
            
            
        </SocialSection>
    );
}
}
export default SocialMedia;