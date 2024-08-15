import Program from "../../Components/fe/gallery/Program";
import Footer from "../../Components/fe/AllPage/Footer";
import Header from "../../Components/fe/AllPage/Header";
import Hero from "../../Components/fe/gallery/Hero";
import Testimonial from "../../Components/fe/gallery/Testimonial";
import Photos from "../../Components/fe/gallery/Photos";
import "../../Components/fe/gallery/SwiperStyles.css";
const Gallerys = () => {
    return (
        <>
            <Header />
            <Hero />
            <Testimonial />
            <Program />
            <Photos />
            <Footer />
        </>
    );
};

export default Gallerys;
