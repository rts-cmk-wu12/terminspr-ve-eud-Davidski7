import Footer from "@/components/footer/footer";
import "./aktiviteter.scss";
import AktiviteterFetch from '@/components/aktiviteter-fetch'


export const metadata = {
    title: "Aktiviteter"
};

export default function Aktiviteter() {

    return (
        <>
            <AktiviteterFetch />

            <Footer />

        </>
    )
}