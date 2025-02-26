import img from "../images/TheRichManAndTheMonkey_page-0011.jpg";
import PageTransition from "../components/Transition";
import "../css/page.css";
export default function Page9() {
  return (
    <div className="page">
      <PageTransition>
        <img src={img} alt="Page 9" />
      </PageTransition>
    </div>
  );
}
