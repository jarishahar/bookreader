import img from "../images/TheRichManAndTheMonkey_page-0013.jpg";
import PageTransition from "../components/Transition";
import "../css/page.css";
export default function Page11() {
  return (
    <div className="page">
      <PageTransition>
        <img src={img} alt="Page 11" />
      </PageTransition>
    </div>
  );
}
