import {Header} from "../organisms/Header/Header";
import {Footer} from "../organisms/Footer/Footer";
import {ProfileSection} from "../organisms/ProfileSection/ProfileSection";
import {MainSection} from "../organisms/MainSection/MainSection";

export const UserPage = () => {
    return(
        <>
            <Header />
            <ProfileSection />
            <MainSection />
            <Footer />
        </>
    )
}