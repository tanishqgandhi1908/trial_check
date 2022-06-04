import React from 'react';
import Navbar from '../navbar/Navbar';
import Card from '../Card/Card';
import NGO1_image from '../images/NGO1.jpg'
import NGO2_image from '../images/NGO2.jpg'
import NGO3_image from '../images/NGO3.png'
import NGO4_image from '../images/NGO4.jpg'
import NGO5_image from '../images/NGO5.jpeg'
import NGO6_image from '../images/NGO6.jpg'
import NGO7_image from '../images/NGO7.png'
import NGO8_image from '../images/NGO8.png'
import NGO9_image from '../images/NGO9.png'
import NGO10_image from '../images/NGO10.jpg'
function Landing() {
    return (
        <>
            <Navbar />

            <div className='wrapper'>
                <Card
                    img={NGO1_image}
                    title='NGO1'

                />

                <Card
                    img={NGO2_image}
                    title='NGO2'
                />

                <Card
                    img={NGO3_image}
                    title='NGO3'
                />

                <Card
                    img={NGO4_image}
                    title='NGO4'
                />

                <Card
                    img={NGO5_image}
                    title='NGO5'
                />

                <Card
                    img={NGO6_image}
                    title='NGO6'
                />

                <Card
                    img={NGO7_image}
                    title='NGO7'
                />

                <Card
                    img={NGO8_image}
                    title='NGO8'
                />

                <Card
                    img={NGO9_image}
                    title='NGO9'
                />

                <Card
                    img={NGO10_image}
                    title='NGO10'
                />

            </div>
        </>
    );
}

export default Landing;