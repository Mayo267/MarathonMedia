import React from "react";
import Categories from '../Components/Categories';
import InfoCards from '../Components/InfoCards';
import Upcoming from '../Components/Upcoming'

function Home() {
    return(
        <div className="home_page back-drop">
            <Categories/>
            <Upcoming />
            <InfoCards/>
        </div>
    )
}

export default Home