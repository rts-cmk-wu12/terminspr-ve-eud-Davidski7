"use client";


// Noget af koden er fra mine tidligere opgaver


import theLoginThing from "@/actions/the-login.thing";
import { useActionState } from "react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { BeatLoader } from "react-spinners";
import Link from "next/link";

const override = {
    display: "block",
    margin: "0 auto",
};

export default function LoginForm() {
    const [formState, formAction, isPending] = useActionState(theLoginThing);
    const router = useRouter();

    useEffect(() => {
        if (formState?.success) {
            router.push("/aktiviteter");
        }
    }, [formState, router]);

    return isPending ? (
        <BeatLoader color="yellow" loading={true} cssOverride={override} size={50} />
    ) : (
        <div className="baground_img" >
            <form className="form_items" action={formAction}>
                <div>
                    <h1 className="big_headline">Login</h1>

                    <label>
                        <input className="input_content" placeholder="Brugernavn" type="text" name="username" />
                        <p>{formState?.properties?.username?.errors}</p>
                    </label>
                </div>
                <div>
                    <label>
                        <input className="input_content" placeholder="Adgangskode" type="password" name="password" />
                        <p>{formState?.properties?.password?.errors}</p>
                    </label>
                </div>
                <button className="forside_knap" type="submit">Log ind</button>
                <p>{formState?.errors}</p>
                <Link href="/opretbruger">
                    <button className="opret_bruger" >Opret Bruger</button>
                </Link>
            </form>
        </div>
    );
}
