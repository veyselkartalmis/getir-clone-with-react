import { useState } from "react";
import { FaFacebook } from "react-icons/fa";
import Slider from "react-slick";
import ReactFlagsSelect from "react-flags-select";

export default function HeroSection() {

    const [selected, setSelected] = useState("TR");

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3500
    };

    const flags = {
        US: '+1',
        GB: '+5',
        FR: '+70',
        DE: '+30',
        IT: '+11',
        TR: '+90',
    }

    return (
        <div className="relative h-auto md:h-[500px] bg-purple-500 relative before:bg-gradient-to-r before:from-purple-600 before:to-transparent before:absolute before:inset-0 before:w-full before:h-full before:z-10">
            <Slider {...settings}>
                <div>
                    <img className="w-full h-[500px] object-cover" src="https://getir.com/_next/static/images/getir-mainpage-4-1751ad2d8fb42a88742d6751938da7e7.jpg" alt="slider1" />
                </div>
                <div>
                    <img className="w-full h-[500px] object-cover" src="https://getir.com/_next/static/images/getir-mainpage-1-757eca6a46304def60cabce74d3f20a2.jpg" alt="slider2" />
                </div>
            </Slider>
            <div className="container flex gap-y-8 justify-between items-center absolute top-0 left-1/2 -translate-x-1/2 h-full z-20">
                <div className="hidden md:block">
                    <img src="https://getir.com/_next/static/images/bimutluluk-b3a7fcb14fc9a9c09b60d7dc9b1b8fd6.svg" alt="logo" />
                    <h3 className="text-4xl mt-8 font-semibold text-white">Dakikalar İçinde <br />Kapınızda</h3>
                </div>
                <div className="w-full md:w-[400px] rounded-lg bg-gray-50 p-6">
                    <h4 className="text-primary-brand-color text-center font-semibold mb-4">Giriş Yap veya Kayıt Ol</h4>
                    <div className="grid gap-y-3">
                        <div className="flex gap-x-2">
                            <ReactFlagsSelect
                                countries={Object.keys(flags)}
                                customLabels={flags}
                                selected={selected}
                                onSelect={code => setSelected(code)}
                                className="flag-select"
                            />
                            <label className="flex-1 relative group block cursor-pointer">
                                <input required className="h-14 px-4 border-2 border-gray-200 rounded w-full transition-colors hover:border-primary-brand-color focus:border-primary-brand-color outline-none peer text-sm focus:pt-2" />
                                <span className="absolute top-0 left-0 h-full px-4 flex items-center text-sm text-gray-500 transition-all peer-focus:h-7 peer-focus:text-primary-brand-color peer-focus:text-xs  peer-valid:h-7 peer-valid:text-primary-brand-color peer-valid:text-xs">Telefon Numarası</span>
                            </label>
                        </div>
                        <button className="bg-brand-yellow h-12 flex items-center justify-center rounded-md w-full text-sm font-semibold text-primary-brand-color hover:text-brand-yellow hover:bg-primary-brand-color transition-colors">
                            Telefon Numarası ile Devam Et
                        </button>
                        <hr className="h-[1px] bg-gray-300 my-2" />
                        <button className="bg-blue-700 bg-opacity-10 h-12 flex items-center px-4 rounded-md w-full text-sm font-semibold text-blue-700 text-opacity-80 hover:text-white hover:bg-blue-700 transition-colors">
                            <FaFacebook size={24} />
                            <span className="mx-auto">Facebook ile Devam Et</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}