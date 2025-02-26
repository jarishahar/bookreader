import img from "../images/TheRichManAndTheMonkey_page-0005.jpg";
import PageTransition from "../components/Transition";
import "../css/page.css";
export default function Page3() {
  return (
    <div className="page">
    <PageTransition>
      <img src={img} alt="Page 3" />
    </PageTransition>
  </div>
  );
}
