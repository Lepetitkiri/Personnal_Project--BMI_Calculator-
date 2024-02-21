import React from "react";

// Components
import Header from '../../Components/Header/Index';
import ImcPart from '../../Components/ImcPart/Index';
import Footer from '../../Components/Footer/Index';

// Provider

function Home() {

    return (
        <>
            <Header />
            <main>
                <ImcPart></ImcPart>
            </main>
            <Footer />
        </>
    );
}

export default Home;