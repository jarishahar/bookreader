import img from "../images/TheRichManAndTheMonkey_page-0014.jpg";
import PageTransition from "../components/Transition";
import "../css/page.css";
export default function Page12() {
  return (
    <div className="page">
      <PageTransition>
        <img src={img} alt="Page 12" />
      </PageTransition>
    </div>
  );
}
