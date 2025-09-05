# Dokumentation for Landrup Dans
David Alexander Simonsen


## Sådan kommer du i gang
`npm install`

`npm run dev`

http://localhost:3000/aktiviteter

Jeg har lavet valgfriopgave B som betyder at man skal kunne oprette bruger selv 
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
* **react-spinners**
Et Loader-bibliotek, som er beregnet til React. Hvor du kan finde forskellige funktionelle Loaders 


## kode-eksempel
(src/components/login-form.jsx)
```jsx
"use server";

import { cookies } from "next/headers";
import z from "zod";

export default async function theLoginThing(prevState, formData) {
    const username = formData.get("username");
    const password = formData.get("password");

    const schema = z.object({
        username: z.string().min(1, { message: "Brugernavn skal være udfyldt" }),
        password: z.string().min(1, { message: "Adgangskode skal være udfyldt" })
    });

    const validated = schema.safeParse({ username, password });

    if (!validated.success) {
        return {
            ...validated,
            ...(z.treeifyError(validated.error))
        };
    }

    const response = await fetch("http://localhost:4000/auth/token", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            username: validated.data.username,
            password: validated.data.password
        })
    });

    if (!response.ok) {
        return {
            success: false,
            errors: ["Brugernavn eller adgangskode er forkert"]
        };
    }

    const data = await response.json();


    const cookieStore = await cookies();

    cookieStore.set("auth_token", data.token, {
        httpOnly: true,
        maxAge: 60 * 30,
        path: "/"
    });


    cookieStore.set("user_id", data.userId.toString(), {
        httpOnly: true,
        maxAge: 60 * 30,
        path: "/"
    });

    cookieStore.set("user_role", data.role, {
        httpOnly: true,
        maxAge: 60 * 30,
        path: "/"
    });

    return { success: true };
}


```
## kode-Forklaring
Først importerer jeg de ting, jeg skal bruge – cookies fra Next.js, så jeg kan gemme loginoplysninger som cookies på serveren, og zod, som jeg bruger til at validere at inputfelterne er udfyldt korrekt.

Derefter laver jeg min serverfunktion theLoginThing, som modtager det tidligere state (prevState) og de indtastede data (formData).

Jeg starter med at hente brugernavn og adgangskode ud af formData.

Så definerer jeg et zod-schema, der siger, at både username og password skal være udfyldt. Hvis schemaet finder fejl (fx tomme felter), returnerer jeg de fejlbeskeder, som brugeren skal se.

Hvis valideringen går igennem, sender jeg en POST-request til mit backend-API på http://localhost:4000/auth/token, hvor jeg sender brugernavn og kodeord i body.

Hvis backend svarer med en fejl (dvs. status ikke er OK), returnerer jeg et objekt med success: false og en generel fejlbesked om, at brugernavn eller adgangskode er forkert.

Ellers henter jeg JSON-svaret fra backend, som indeholder et login-token, brugerens id og brugerens rolle.

Herefter bruger jeg cookies() til at gemme disse oplysninger i cookies på serveren:

auth_token → selve tokenet, som bruges til at identificere brugeren.

user_id → det unikke id for brugeren.

user_role → brugerens rolle (fx admin eller almindelig bruger).

Alle cookies bliver sat med httpOnly (så de ikke kan læses fra JavaScript i browseren), og de udløber efter 30 minutter.

Til sidst returnerer jeg { success: true }, så resten af app’en kan se, at login lykkedes, og f.eks. sende brugeren videre til en ny side.

## Ændringer/Valg jeg har taget
1. jeg har valgt at man godt kan bevæge sig rundt på appen uden at være logget ind. Mest fordi jeg tænke at det kunne give en fed oplevse at man kunne se aktiviteter før man logger ind, så man ligeso kan tjek tingene ud uden at man behvøer at være logget ind først, men man kan selvfølelig ikke Tilmelde sig før man er logget ind.
2. Jeg har valgt at lave en Afmeld knap på kalender siden, så man ikke behøver ind på details siden men så man kan gære det direkte fra kalenderen. Så tilføjede jeg at der kommer en pop up om du er sikker på at du vil Afmelde denne aktivitet hvor du så kan man så sige JA eller Nej
3. Jeg har valgt at lave en masse if så brugerne ligesom ved hvis man ikke har tilmeldt sig nogen aktivitet så ved brugern det fordi der kommer en fejlbesked frem
```jsx
//   eksempel 
    if (aktiviteter.length === 0) {
        return <p className="fejl_besked">Du har ikke tilmeldt dig nogen aktiviteter endnu.</p>;
    }
``` 
For at gøre det mest mulig hensigtsmæssigt for bruger så man ikke på noget tidspunkt er i tvivl om hvad der sker 


