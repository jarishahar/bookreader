import img from "../images/TheRichManAndTheMonkey_page-0002.jpg";
import "../css/page.css";
import PageTransition from "../components/Transition";

export default function Page1() {
  return (
    <div className="page">
      <PageTransition>
        <img src={img} alt="Page 1" />
      </PageTransition>
    </div>
  );
}
