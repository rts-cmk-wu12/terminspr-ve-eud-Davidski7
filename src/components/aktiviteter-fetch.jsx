import Image from "next/image";
import Link from "next/link";



// noget af koden på denne side er noget som jeg har brugt i en tidligere opgave (iPlayMusic)
export default async function AktiviteterFetch() {



    const response = await fetch("http://localhost:4000/api/v1/activities", {
        headers: {
            "Authorization": `Bearer `
        }
    });

    const data = await response.json();
    console.log("data", data);

    return (
        <>
            <h1 className="fix_tittle">Aktiviteter</h1>
            <div className="aktivitet_box">
                {data.map((card, index) => (
                    <Link href={`/aktivitetsdetaljer/${card.id}`} key={card.id}>
                        <div className="card" key={index}>
                            {card.asset?.url && (
                                <Image
                                    unoptimized
                                    src={card.asset.url}
                                    width={300}
                                    height={200}
                                    alt={card.name}
                                    className="cardbillede"
                                />
                            )}
                            <div className="cardindhold">
                                <h2 className="cardnavn">{card.name}</h2>
                                <p>Alder: {card.minAge} - {card.maxAge}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

        </>
    )
}