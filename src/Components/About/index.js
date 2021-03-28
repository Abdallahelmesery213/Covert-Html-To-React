
import { React } from 'react';
import {Creative, CreativeInfo, InfoTitle , InfoSpan , InfoDir , Desc , DescLink} from './style'

const About = () => {
    return ( 
        <Creative>
            <div className="container">
                <CreativeInfo>
                    <InfoTitle><InfoSpan>This is</InfoSpan> Me</InfoTitle>
                    <InfoDir>Creative Director</InfoDir>
                    <Desc>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est <DescLink href="#">explicabo</DescLink> maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
                    </Desc>
                    <Desc>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est explicabo maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
                    </Desc>
                </CreativeInfo>
            </div>
        </Creative>
    );
}

export default About;