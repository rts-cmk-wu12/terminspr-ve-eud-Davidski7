import Footer from "@/components/footer/footer";
import SearchFunction from "@/components/searchfunction";
import "./search.scss";


export const metadata = {
    title: "Search"
};

export default function SearchPage() {

    return (

        <>

            <SearchFunction />

            <Footer />

        </>
    )
}