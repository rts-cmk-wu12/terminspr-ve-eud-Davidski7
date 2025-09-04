import Footer from "@/components/footer/footer";
import AktivitetsDetaljerFetch from '@/components/aktivitetsdetaljer-fetch'
import "../aktivitetsdetaljer.scss";


export const metadata = {
    title: "AktivitetsDetaljer"
};
export default function AktivitetsDetaljer({ params }) {

    return (

        <>

            <AktivitetsDetaljerFetch id={params.id} />
            <Footer />
        </>
    )
}