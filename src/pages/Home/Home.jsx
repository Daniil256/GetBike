import React from "react";
import ImageCarousel from "../../components/home_components/imageCarousel/ImageCarousel";
import BikesCategories from "../../components/home_components/bikesCategories/BikesCategories";
import ElectricTransportCategory from "../../components/home_components/electricTransportCategory/ElectricTransportCategory";
import BlockTechnology from "../../components/home_components/block_technology/BlockTechnology";
import TextCarousel from "../../components/home_components/textCarousel/TextCarousel";
import BlockAdvantages from "../../components/home_components/block_advantages/BlockAdvantages";
import BlockNews from "../../components/home_components/block_news/BlockNews";

const Home = () => {

    return (
        <div className="Home">
            <ImageCarousel />
            <BikesCategories />
            <ElectricTransportCategory />
            <BlockTechnology />
            <TextCarousel />
            <BlockAdvantages />
            <BlockNews />
        </div>
    )
}
export default Home
