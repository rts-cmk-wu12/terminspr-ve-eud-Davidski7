

import OpretBrugerForm from "@/components/opretbruger-form";
import "./opretbruger.scss";

export const metadata = {
    title: "Opret bruger"
};



export default function OpretBruger() {



    return (
        <>
            <div className="bigthing" >
                <OpretBrugerForm />
            </div>
        </>
    )
}