import Footer from "@/components/footer/footer";
import AktivitetsDetaljerFetch from '@/components/aktivitetsdetaljer-fetch'
import "../aktivitetsdetaljer.scss";

export default function AktivitetsDetaljer({ params }) {

    return (

        <>

            <AktivitetsDetaljerFetch id={params.id} />
            <Footer />
        </>
    )
}