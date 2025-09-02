import { cookies } from "next/headers";

export default async function KalenderDefaultItems() {
    const cookieStore = cookies();
    const token = cookieStore.get("auth_token")?.value;


    const response = await fetch("http://localhost:4000/api/v1/activities/3", {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    });


    const data = await response.json();
    console.log("data", data);

    return null;
}
