"use server";
import z from "zod";
export default async function opretbrugeraction(currentstate, formData) {
    const username = formData.get("username")
    const password = formData.get("password")
    const firstname = formData.get("firstname")
    const lastname = formData.get("lastname")
    const age = formData.get("age")
    console.log(username)




    const schema = z.object({
        username: z.string().min(1, { message: "Brugernavn skal være udfyldt" }),
        password: z.string().min(1, { message: "Adgangskode skal være udfyldt" }),
        firstname: z.string().min(1, { message: "Brugernavn skal være udfyldt" }),
        lastname: z.string().min(1, { message: "Brugernavn skal være udfyldt" }),
        age: z.string().min(1, { message: "Brugernavn skal være udfyldt" })
    });

    const validated = schema.safeParse({ username, password, firstname, lastname, age });

    if (!validated.success) {
        return {
            ...validated,
            ...(z.treeifyError(validated.error))
        };
    }

    return { success: true, data: validated.data };
}