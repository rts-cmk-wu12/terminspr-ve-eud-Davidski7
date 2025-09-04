import Image from "next/image";
import { cookies } from "next/headers";
import TilmeldButton from "./tilmeldbutton";


// Noget af koden er fra mine tidligere opgaver


export default async function AktivitetsDetaljerFetch({ id }) {
    const cookieStore = await cookies();
    const token = cookieStore.get("auth_token")?.value;
    const userId = cookieStore.get("user_id")?.value;

    const response = await fetch(`http://localhost:4000/api/v1/activities/${id}`, {
        headers: {
            "Authorization": `Bearer ${token || ""}`
        },
    });

    const data = await response.json();

    return (
        <>
            <div className="photo_overlay">
                <Image
                    unoptimized
                    src={data.asset.url}
                    width={411}
                    height={489}
                    alt={data.name}
                    className="cardbillede"
                />
                <TilmeldButton
                    activityId={id}
                    token={token}
                    userId={userId}
                />
            </div>
            <div className="text_information">
                <h1>{data.name}</h1>
                <p>{data.weekday} kl. {data.time}</p>
                <p>{data.description}</p>
                <p>Alder: {data.minAge} - {data.maxAge}</p>
            </div>
        </>
    );
}
