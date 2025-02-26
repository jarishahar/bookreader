import img from "../images/TheRichManAndTheMonkey_page-0006.jpg";
import PageTransition from "../components/Transition";
import "../css/page.css";
export default function Page4() {
  return (
    <div className="page">
    <PageTransition>
      <img src={img} alt="Page 4" />
    </PageTransition>
  </div>
  );
}
