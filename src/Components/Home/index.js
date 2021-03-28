import {HomeSection, Inform , Title , Info , Desc , Span , Btn} from './style.js';
const Home = () => {
    return ( 
        <HomeSection>
            <div className="container">
                <Inform>
                    <Title>Abdallah Elmesery</Title>
                    <Info>Creative Director</Info>
                    <Desc>
                        Iam a professional <Span>UX Designer</Span> and Front-End Developer creating modern and resposive designs to Web and Mobile. Let us work together. Thank you. 
                    </Desc>
                    <Btn>Let's Begin</Btn>
                </Inform>
            </div>
        </HomeSection>
     );
}
 
export default Home;