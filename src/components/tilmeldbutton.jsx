"use client";

import { useRouter } from "next/navigation";

export default function TilmeldButton({ activityId, token, userId }) {
    const router = useRouter();

    async function Tilmelding() {
        await fetch(`http://localhost:4000/api/v1/users/${userId}/activities/${activityId}`, {
            method: "POST",
            headers: {
                "Authorization": "Bearer " + token
            }
        });
        router.push(token ? "/kalenderdefault" : "/login");
    }

    return (
        <button className="forside_knap" onClick={Tilmelding}>
            Tilmeld
        </button>
    );
}
