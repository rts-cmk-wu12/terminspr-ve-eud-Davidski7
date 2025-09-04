# Dokumentation for Landrup Dans
David Alexander Simonsen


## Sådan kommer du i gang
`npm install`

`npm run dev`

http://localhost:3000/aktiviteter

Jeg har lavet valgfriopgave A og har valgt at oploade den på Render.com ()
...


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
import { BeatLoader } from "react-spinners";

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
## kode-Forklaring
Først importerer jeg de ting jeg skal bruge, fx theLoginThing (min login-funktion), useActionState, useRouter, useEffect og en loader (BeatLoader).

Jeg starter med at lave mine const – her får jeg formState, formAction og isPending fra useActionState. Jeg henter også router fra Next.js til navigation.

Med useEffect tjekker jeg, om login lykkes (formState?.success), og hvis ja, så sender jeg brugeren videre til /aktiviteter.

Hvis isPending er true, viser jeg en gul loader.

Ellers viser jeg selve login-formularen, hvor man kan skrive brugernavn og kodeord. Eventuelle fejl (errors) bliver vist under felterne.

Til sidst er der en knap til at logge ind, og nederst vises evt. generelle fejlbeskeder

## Ændringer/Valg jeg har taget
1. jeg har valgt at man godt kan bevæge sig rundt på appen uden at være logget ind. Mest fordi jeg tænke at det kunne give en fed oplevse at man kunne se aktiviteter før man logger ind, så man ligeso kan tjek tingene ud uden at man behvøer at være logget ind først, men man kan selvfølelig ikke Tilmelde sig før man er logget ind.
2. Jeg har valgt at lave en Afmeld knap på kalender siden, så man ikke behøver ind på details siden men så man kan gære det direkte fra kalenderen. Så tilføjede jeg at der kommer en pop up om du er sikker på at du vil Afmelde denne aktivitet hvor du så kan man så sige JA eller Nej
3. Jeg har valgt at lave en masse if til forskellige problemer på siden
```jsx
//   eksempel 
  if (!token || !userId) {
        return <p className="fejl_besked">Du skal logge ind for at se dine aktiviteter.</p>;
    }
``` 
For at gøre det mest mulig hensigtsmæssigt for bruger så man ikke på noget tidspunkt er i tvivl om hvad der sker 


