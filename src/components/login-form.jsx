export default function LoginForm() {


    return (
        <form className="form_items">
            <div>
                <h1 className="big_headline">Login</h1>
                <label>
                    <input className="input_content" placeholder="Brugernavn" type="text" name="username" />

                </label>
            </div>
            <div>
                <label>

                    <input className="input_content" placeholder="Adgangskode" type="password" name="password" />

                </label>
            </div>
            <button className="forside_knap" type="submit">Log ind</button>

        </form>
    )
}