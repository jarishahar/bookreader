import img from "../images/TheRichManAndTheMonkey_page-0004.jpg";
import PageTransition from "../components/Transition";
import "../css/page.css";
export default function Page2() {
  return (
    <div className="page">
      <PageTransition>
        <img src={img} alt="Page 2" />
      </PageTransition>
    </div>
  );
}
