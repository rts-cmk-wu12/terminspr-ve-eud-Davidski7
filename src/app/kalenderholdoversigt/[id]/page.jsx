import KalenderHoldoversigtItems from "@/components/kalenderholdoversigt-items";
import "../kalenderholdoversigt.scss";


export const metadata = {
    title: "Kalenderholdoversigt"
};

export default async function KalenderHoldoversigt({ params }) {


    return (
        <>
            <KalenderHoldoversigtItems activityId={params.id} />;
        </>
    );
}
