# Dokumentation for Landrup Dans
David Alexander Simonsen


## Sådan kommer du i gang
`npm install`

`npm run dev`

http://localhost:3000/aktiviteter

Jeg har lavet valgfri ...


## Tech-stack
* **Next.js**  
Et front-end framework baseret på React.js som også giver adgang til server-side komponenter og -actions, samt mappebaseret routing. Server-side komponenter og funktioner giver en større sikkerhed, da al koden afvikles på serveren fremfor i klienten.
* **React**  
Et bibliotek der giver mig mulighed for at lave komponenter og håndtere states på en god og let måde. React har et stort community med stort modul-bibliotedk, som er aktivt, vel-dokumenteret og  vel-understøttet. Det er også det mest brugte front-end bibliotek i verden, så efterspørgslen på React-udviklere er stor. 
* **Git**  
Et versionsstyringsværktøj, som lader mig lave branches og versioner af min kode, så jeg let kan gå tilbage til tidligere versioner, hvis jeg for eksmapel har lavet en fejl. Jeg bruger Git sammen med GitHub.
* **React-icons**  
Et ikon-bibliotek, som er beregnet på React. 
* **SASS**  
En udvidelse til CSS, som lader mig lave funktioner, variabler, mixins og nesting. Jeg kan opdele min CSS i moduler og dermed genbruge kode flere steder.
* **Web-API fra Landrup Dans**  
Et interface til at få adgang til Landrup Dans's data, så jeg kan lave min egen app.
* **Zod**  
Et valideringsbibliotek til objekter og strings. Jeg bruger Zod til blandt andet at validere bruger-input fra formularer.


## kode-eksempel
(src/components/featuredcard.jsx)
```jsx
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
            router.push("/aktiviteter");
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

```
Jeg starter med at lave at lave mine const 


