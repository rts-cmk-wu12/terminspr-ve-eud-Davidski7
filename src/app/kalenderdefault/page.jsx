import KalenderDefaultItems from '@/components/kalenderdefault-items'
import Footer from "@/components/footer/footer";
import "./kalenderdefault.scss";

export const metadata = {
    title: "Kalenderdefault"
};

export default function KalenderDefault() {

    return (

        <>

            <KalenderDefaultItems />

            <Footer />
        </>
    )
}