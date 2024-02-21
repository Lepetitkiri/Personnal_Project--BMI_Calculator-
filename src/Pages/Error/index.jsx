import React from "react";

// Components
import Header from '../../Components/Header/Index';
import WorkInProgress from '../../Components/WorkInProgress/Index';
import Footer from '../../Components/Footer/Index';

// Provider

function Error() {

    return (
        <>
            <Header />
            <main>
                <WorkInProgress />
                <p>Page Error</p>
            </main>
            <Footer />
        </>
    );
}

export default Error;