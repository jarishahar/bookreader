import img from "../images/TheRichManAndTheMonkey_page-0010.jpg";
import PageTransition from "../components/Transition";
import "../css/page.css";
export default function Page8() {
  return (
    <div className="page">
      <PageTransition>
        <img src={img} alt="Page 8" />
      </PageTransition>
    </div>
  );
}
