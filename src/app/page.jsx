import "./home.scss";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="bigthing" >
        <div className="tekstindhold">
          <p className="lilletekst">Landrup</p>
          <p className="stortekst">Dans</p>
        </div>
        <Link href="/aktiviteter">
          <button className="forside_knap">
            Kom i gang
          </button>
        </Link>
      </div>

    </>
  );
}
