import React from "react";

// Components
import Header from '../../Components/Header/Index';
import WorkInProgress from '../../Components/WorkInProgress/Index';
import Footer from '../../Components/Footer/Index';

// Provider

function Home() {

    return (
        <>
            <Header />
            <main>
                <WorkInProgress />
                <p>Page Home</p>
            </main>
            <Footer />
        </>
    );
}

export default Home;