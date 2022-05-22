import { useState, useEffect } from "react";
import Slider from "react-slick";
import Banners from "api/banners.json";
import Title from "./ui/Title";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

function NextButton({ onClick, className }) {
    return (
        <button className={`${className} text-purple-700`} onClick={onClick}>
            <IoIosArrowForward size={22} />
        </button>
    )
}
function PrevButton({ onClick, className }) {
    return (
        <button className={`${className} text-purple-700`} onClick={onClick}>
            <IoIosArrowBack size={22} />
        </button>
    )
}

export default function Campaigns() {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3500,
        nextArrow: <NextButton />,
        prevArrow: <PrevButton />
    };

    const [banners, setBanners] = useState([]);

    useEffect(() => {
        setBanners(Banners);
    }, []);

    return (
        <div className="container mx-auto py-8">
            <Title>Kampanyalar</Title>
            <Slider {...settings} className="-mx-2">
                {banners.length && banners.map((banner, index) => (
                    <div className={index}>
                        <picture className="block px-2">
                            <img src={banner.image} alt="campaign" className="rounded-lg" />
                        </picture>
                    </div>
                ))}
            </Slider>
        </div>
    )
}