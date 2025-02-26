import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/navigator.css";
import { MdOutlineSkipPrevious, MdOutlineSkipNext } from "react-icons/md";
import { GrPowerReset } from "react-icons/gr";
import sound from "../audio/page-flip.mp3";

export default function NavigationButton({ totalPages }) {
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
  const handleReset = () => {
    navigate(`/page1`);
    play();
  };
  const play = () => {
    new Audio(sound).play();
  };

  return (
    <div>
      <button className="buttonprev" onClick={handlePrevious}>
        <MdOutlineSkipPrevious />
      </button>
      <button className="buttonnext" onClick={handleNext}>
        <MdOutlineSkipNext />
      </button>
      <button className="reset" onClick={handleReset}>
        <GrPowerReset />
      </button>
    </div>
  );
}
