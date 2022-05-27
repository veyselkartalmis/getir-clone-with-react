import { useState, useEffect } from "react";
import Slider from "react-slick";
import Banners from "api/banners.json";
import Title from "./ui/Title";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

function NextButton({ onClick, className }) {
    return (
        <button className={`text-brand-color absolute top-1/2 -right-6 -translate-y-1/2`} onClick={onClick}>
            <IoIosArrowForward size={22} />
        </button>
    )
}
function PrevButton({ onClick, className }) {
    return (
        <button className={`text-brand-color absolute top-1/2 -left-6 -translate-y-1/2`} onClick={onClick}>
            <IoIosArrowBack size={22} />
        </button>
    )
}

export default function Campaigns() {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3500,
        cssEase: "linear",
        arrows: true,
        nextArrow: <NextButton />,
        prevArrow: <PrevButton />,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    arrows: false,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                }
            }
        ]
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