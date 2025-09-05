"use client";

import opretbrugeraction from "@/actions/opretbrugeraction";
import { useActionState } from "react"

export default function OpretBrugerForm() {


    const [formState, formaction, isPending] = useActionState(opretbrugeraction)
    return (
        <>
            <form className="form_items" action={formaction}>
                <h1 className="big_headline">Opret Bruger</h1>
                <label>
                    <input className="input_content" placeholder="firstname" type="text" name="firstname" />
                    <p>{formState?.properties?.firstname?.errors}</p>
                </label>
                <label>
                    <input className="input_content" placeholder="lastname" type="text" name="lastname" />
                    <p>{formState?.properties?.lastname?.errors}</p>
                </label>
                <label>
                    <input className="input_content" placeholder="username" type="text" name="username" />
                    <p>{formState?.properties?.username?.errors}</p>
                </label>
                <label>
                    <input className="input_content" placeholder="password" type="text" name="password" />
                    <p>{formState?.properties?.password?.errors}</p>
                </label>
                <label>
                    <input className="input_content" placeholder="age" type="text" name="age" />
                    <p>{formState?.properties?.age?.errors}</p>
                </label>
                <button className="forside_knap" type="submit">Log ind</button>
            </form>

        </>
    )
}