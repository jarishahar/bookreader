import img from "../images/TheRichManAndTheMonkey_page-0012.jpg";
import PageTransition from "../components/Transition";
import "../css/page.css";
export default function Page10() {
  return (
    <div className="page">
      <PageTransition>
        <img src={img} alt="Page 10" />
      </PageTransition>
    </div>
  );
}
