import React from "react";

// Components
import Header from '../../Components/Header/Index';
import WorkInProgress from '../../Components/WorkInProgress/Index';
import Footer from '../../Components/Footer/Index';

// Provider

function Contact() {

    return (
        <>
            <Header />
            <main>
                <WorkInProgress />
                <p>Page Contact</p>
            </main>
            <Footer />
        </>
    );
}

export default Contact;