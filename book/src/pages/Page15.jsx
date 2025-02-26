import img from "../images/TheRichManAndTheMonkey_page-0017.jpg";
import PageTransition from "../components/Transition";
import "../css/page.css";
export default function Page15() {
  return (
    <div className="page">
      <PageTransition>
        <img src={img} alt="Page 15" />
      </PageTransition>
    </div>
  );
}
