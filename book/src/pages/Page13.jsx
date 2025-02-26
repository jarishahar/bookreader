import img from "../images/TheRichManAndTheMonkey_page-0015.jpg";
import PageTransition from "../components/Transition";
import "../css/page.css";
export default function Page13() {
  return (
    <div className="page">
      <PageTransition>
        <img src={img} alt="Page 13" />
      </PageTransition>
    </div>
  );
}
