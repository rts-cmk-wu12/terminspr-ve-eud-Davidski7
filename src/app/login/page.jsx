import LoginForm from "@/components/login-form";
import "./login.scss";


export const metadata = {
    title: "Login"
};


export default function LoginPage() {

    return (
        <div className="bigthing" >
            <LoginForm />
        </div>
    )
}