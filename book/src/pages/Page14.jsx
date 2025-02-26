import img from "../images/TheRichManAndTheMonkey_page-0016.jpg";
import PageTransition from "../components/Transition";
import "../css/page.css";
export default function Page14() {
  return (
    <div className="page">
      <PageTransition>
        <img src={img} alt="Page 14" />
      </PageTransition>
    </div>
  );
}
