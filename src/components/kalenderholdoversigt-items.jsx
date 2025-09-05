import { cookies } from "next/headers";

export default async function KalenderHoldoversigtItems({ activityId }) {
    const cookieStore = await cookies();
    const token = cookieStore.get("auth_token")?.value;
    const role = cookieStore.get("user_role")?.value;

    if (role !== "instructor") {
        return <p>Adgang nægtet - kun instruktører kan se denne side.</p>;
    }


    const response = await fetch(`http://localhost:4000/api/v1/activities/${activityId}`, {
        headers: { Authorization: `Bearer ${token}` },
    });


    const aktiviteter = await response.json();


    const deltagere = aktiviteter.users || aktiviteter.deltagere || [];

    return (
        <div className="holdoversigt_container">
            <h1 className="fix_tittle">{aktiviteter.name} - Deltagere</h1>
            {deltagere.length === 0 ? (
                <p>Ingen deltagere tilmeldt endnu.</p>
            ) : (
                <ul>
                    {deltagere.map((user) => (
                        <li className="user_list" key={user.id}>
                            {user.firstname} {user.lastname}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
