
import React from 'react';
import {DropSection , DropTitle , Span , DForm , FormInput , InputText , InputEmail , InputSub , TxtArea , Button} from './style';
import Footer from '../Footer';
const Contact = () => {
    return ( 
        <React.Fragment>
            <DropSection>
                <div className="container">
                    <DropTitle><Span>Drop </Span>Me A line</DropTitle>
                    <DForm action="">
                        <FormInput>
                            <InputText type="text" placeholder="Your Name" />
                            <InputEmail type="email" placeholder="Your Email" />
                        </FormInput>

                        <InputSub type="text" class="sub" placeholder="Your Subject" />
                        <TxtArea cols="30" rows="10" placeholder="Your Message"></TxtArea>

                        <Button type="submit" value="Send Message" />
                    </DForm>
                </div>
            </DropSection>
            <Footer />
        </React.Fragment>
    );
}

export default Contact;