import { useNavigate } from "react-router-dom";
import { useSwipeable } from "react-swipeable";
import sound from "../audio/page-flip.mp3";
import "../css/navigator.css";

export default function NavigationSwipe({ totalPages }) {
  const navigate = useNavigate();

  const handleNext = () => {
    const currentPath = window.location.pathname;
    const currentPage = parseInt(currentPath.replace("/page", "")) || 1;

    if (currentPage < totalPages) {
      navigate(`/page${currentPage + 1}`);
      play();
    }
  };

  const handlePrevious = () => {
    const currentPath = window.location.pathname;
    const currentPage = parseInt(currentPath.replace("/page", "")) || 1;

    if (currentPage > 1) {
      navigate(`/page${currentPage - 1}`);
      play();
    }
  };

  const play = () => {
    new Audio(sound).play();
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => handleNext(),
    onSwipedRight: () => handlePrevious(),

    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  return <div className="swipe" {...handlers}></div>;
}
