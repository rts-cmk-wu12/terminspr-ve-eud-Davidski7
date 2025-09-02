import Image from "next/image";
import Link from "next/link";
import { cookies } from "next/headers";


// noget af koden på denne side er noget som jeg har brugt i en tidligere opgave (Eksamesforberedelse)
export default async function AktivitetsDetaljerFetch({ id }) {




    const cookieStore = cookies();
    const token = cookieStore.get("auth_token")?.value;


    const response = await fetch(`http://localhost:4000/api/v1/activities/${id}`, {
        headers: {
            "Authorization": `Bearer ${token || ""}`
        }
    });

    const data = await response.json();
    console.log("data", data);

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
                <Link href={token ? "/kalenderdefault" : "/login"}>
                    <button className="forside_knap">Tilmeld</button>
                </Link>

            </div>
            <div className="text_information">
                <h1>{data.name}</h1>
                <p>{data.weekday} kl. {data.time}</p>
                <p>{data.description}</p>
                <p>Alder: {data.minAge} - {data.maxAge}</p>
            </div>
        </>
    )
}