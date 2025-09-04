"use client";

import opretbrugeraction from "@/actions/opretbrugeraction";
import { useActionState } from "react"

export default function OpretBruger() {


    const [formState, formaction, isPending] = useActionState(opretbrugeraction)
    return (
        <>
            <form action={formaction}>
                <input className="input_content" placeholder="Brugernavn" type="text" name="username" />
                <p>{formState?.properties?.username?.errors}</p>
                <input className="input_content" placeholder="Brugernavn" type="text" name="password" />
                <p>{formState?.properties?.password?.errors}</p>
                <input className="input_content" placeholder="Brugernavn" type="text" name="firstname" />
                <p>{formState?.properties?.firstname?.errors}</p>
                <input className="input_content" placeholder="Brugernavn" type="text" name="lastname" />
                <p>{formState?.properties?.lastname?.errors}</p>
                <input className="input_content" placeholder="Brugernavn" type="text" name="age" />
                <p>{formState?.properties?.age?.errors}</p>
                <button className="forside_knap" type="submit">Log ind</button>
            </form>

        </>
    )
}