import { FiHome } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import { CiCalendar } from "react-icons/ci";
import Link from "next/link";
import "./footer.scss";

export default function Footer() {

    return (
        <footer className="footer">
            <Link href="/aktiviteter" className="footer-icon"><FiHome /></Link>
            <Link href="/aktiviteter" className="footer-icon"><CiSearch /></Link>
            <Link href="/aktiviteter" className="footer-icon"><CiCalendar /></Link>

        </footer>
    )
}