
import  React from 'react';
import {WorkSection,WorkTitle,Span,Part,Icon,PartTitle,Line,Dsc} from './style.js'
import axios from 'axios'
import data from '../../data.json'
class Work extends React.Component {
    state = {
        works : []
    }
    componentDidMount () {
        axios.get(`${data}`).then (res => {this.setState({works:res.data.works})})
    }
    render (){
        const works = data.works;
        const worksList = works.map( (imageitem) => {
            return ( 
                
                        <Part first={imageitem.id} key={imageitem.id}>
                            <Icon className={imageitem.icon_name}></Icon>
                            <PartTitle>{imageitem.title}</PartTitle>
                            <Line />
                            <Dsc>
                                {imageitem.body}
                            </Dsc>
                        </Part>
            );
        });
        return ( 
            <WorkSection >
                <div className="container">
                    <WorkTitle><Span>My</Span> Work</WorkTitle>
                    {worksList}
                </div>
            </WorkSection>
        );
    }
    
}

export default Work;