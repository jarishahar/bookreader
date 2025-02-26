import img from "../images/TheRichManAndTheMonkey_page-0009.jpg";
import PageTransition from "../components/Transition";
import "../css/page.css";
export default function Page7() {
  return (
    <div className="page">
      <PageTransition>
        <img src={img} alt="Page 7" />
      </PageTransition>
    </div>
  );
}
