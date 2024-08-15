import { Head } from "@inertiajs/react";
import About from "../Components/fe/home/About";
import Header from "../Components/fe/AllPage/Header.jsx";
import Hero from "../Components/fe/home/Hero";
import Reason from "../Components/fe/home/Reason";
import Video from "../Components/fe/home/Video";
import Faq from "../Components/fe/home/Faq";
import Footer from "../Components/fe/AllPage/Footer.jsx";

export default function Welcome() {
    const handleImageError = () => {
        document
            .getElementById("screenshot-container")
            ?.classList.add("!hidden");
        document.getElementById("docs-card")?.classList.add("!row-span-1");
        document
            .getElementById("docs-card-content")
            ?.classList.add("!flex-row");
        document.getElementById("background")?.classList.add("!hidden");
    };

    return (
        <>
            <Head title="Seameo Recfon" />
            <Header />
            <Hero />
            <About />
            <Reason />
            <Video />
            <Faq />
            <Footer />
        </>
    );
}
