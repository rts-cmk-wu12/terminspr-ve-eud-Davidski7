import { cookies } from "next/headers";


// Noget af koden er fra mine tidligere opgaver


export default async function KalenderDefaultItems() {
    const cookieStore = await cookies();
    const token = cookieStore.get("auth_token")?.value;
    const userId = cookieStore.get("user_id")?.value;

    if (!token || !userId) {
        return <p>Du skal logge ind for at se dine aktiviteter.</p>;
    }

    const response = await fetch(`http://localhost:4000/api/v1/users/${userId}`, {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    });

    if (!response.ok) {
        return <p>Ingen aktiviteter fundet.</p>;
    }

    const userData = await response.json();


    const aktiviteter = userData.activities || [];

    if (aktiviteter.length === 0) {
        return <p>Du har ikke tilmeldt dig nogen aktiviteter endnu.</p>;
    }

    return (
        <>

            <h1 className="fix_tittle">Kalender</h1>

            <div className="activities_container">
                {aktiviteter.map((aktivitet) => (
                    <div className="activity_box" key={aktivitet.id}>
                        <p className="activity_name">{aktivitet.name}</p>
                        <p className="activity_time">{aktivitet.weekday} kl. {aktivitet.time}</p>
                    </div>
                ))}
            </div>
        </>
    );
}
