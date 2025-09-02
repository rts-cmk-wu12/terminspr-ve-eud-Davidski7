"use client";

import theLoginThing from "@/actions/the-login.thing";
import { useActionState } from "react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { PacmanLoader } from "react-spinners";

const override = {
    display: "block",
    margin: "0 auto",
};

export default function LoginForm() {
    const [formState, formAction, isPending] = useActionState(theLoginThing);
    const router = useRouter();

    useEffect(() => {
        if (formState?.success) {
            router.push("/kalenderdefault");
        }
    }, [formState, router]);

    return isPending ? (
        <PacmanLoader color="yellow" loading={true} cssOverride={override} size={150} />
    ) : (
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
        </form>
    );
}
