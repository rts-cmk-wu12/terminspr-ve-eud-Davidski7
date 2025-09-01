import Image from "next/image";
import Link from "next/link";


// noget af koden på denne side er noget som jeg har brugt i en tidligere opgave (Eksamesforberedelse)
export default async function AktivitetsDetaljerFetch({ id }) {





    const response = await fetch(`http://localhost:4000/api/v1/activities/${id}`, {
        headers: {
            "Authorization": `Bearer `
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
                <Link href="/login">
                    <button className="forside_knap">
                        Kom i gang
                    </button>
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