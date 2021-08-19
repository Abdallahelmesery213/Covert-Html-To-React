
import  React from 'react';
import { useState , useEffect } from 'react';
import axios from 'axios';
import data from'../../data.json';
import {PortSection, PortTitle,PortSpan,PortList,PortItem,Box,Image,Overlay,OvSpan} from './style';
const Portfolio = () => {
    const [images , setImages] = useState( [] );  // Hooks => useState
    useEffect( () => {
        axios.get(`${data}`).then ( res => {setImages( res.data.portfolio)})
    } , []);
    const PortImages = images.map( (item) => {
        return (
            <Box key={item.id}>
                    <Image src={item.image} alt="" />
                    <Overlay>
                        <OvSpan>
                            Show Image
                        </OvSpan>
                    </Overlay>
                </Box>
        )
    })
    return ( 
        <PortSection>
            <PortTitle><PortSpan>My</PortSpan> Portfolio</PortTitle>
            <PortList>
                <PortItem active>All</PortItem>
                <PortItem>HTML</PortItem>
                <PortItem>Photoshop</PortItem>
                <PortItem>Wordpress</PortItem>
                <PortItem>Mobile</PortItem>
            </PortList>
            
            <div className="box">
                {PortImages}
            </div>
            
        </PortSection>
    );
}

export default Portfolio;