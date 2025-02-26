import img from "../images/TheRichManAndTheMonkey_page-0008.jpg";
import PageTransition from "../components/Transition";
import "../css/page.css";
export default function Page6() {
  return (
    <div className="page">
      <PageTransition>
        <img src={img} alt="Page 6" />
      </PageTransition>
    </div>
  );
}
