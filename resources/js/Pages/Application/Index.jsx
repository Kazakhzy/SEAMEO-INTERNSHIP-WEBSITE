import Hero from "../../Components/fe/application/Hero";
import Footer from "../../Components/fe/AllPage/Footer";
import Header from "../../Components/fe/AllPage/Header";
import Eligibility from "../../Components/fe/application/Eligibility";
import Documents from "../../Components/fe/application/Documents";
import Registration from "../../Components/fe/application/Registration";
import Information from "../../Components/fe/application/Information";

const Index = () => {
    return (
        <>
            <Header />
            <Hero />
            <Eligibility />
            <Documents />
            <Registration />
            <Information />
            <Footer />
        </>
    );
};

export default Index;
