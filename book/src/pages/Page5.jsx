import img from "../images/TheRichManAndTheMonkey_page-0007.jpg";
import PageTransition from "../components/Transition";
import "../css/page.css";
export default function Page5() {
  return (
    <div className="page">
      <PageTransition>
        <img src={img} alt="Page 5" />
      </PageTransition>
    </div>
  );
}
