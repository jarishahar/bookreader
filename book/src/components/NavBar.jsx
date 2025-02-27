import { useState, useEffect } from "react";
import styles from "../css/navbar.module.css";
import { useNavigate } from "react-router-dom";
import { LuShare2 } from "react-icons/lu";

import { FaWhatsapp, FaFacebookF, FaLinkedin, FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaAnglesUp, FaAnglesDown } from "react-icons/fa6";
import sound from "../audio/page-flip.mp3";

export default function NavBar({ totalPages }) {
  const navigate = useNavigate();
  const [value, setValue] = useState({ pageno: "1" });

  const handleChanges = (e) => {
    setValue({ [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const page = parseInt(value.pageno);
    const currentPath = window.location.pathname;
    const currentPage = parseInt(currentPath.replace("/page", "")) || 1;
    if (currentPage < totalPages) {
      navigate(`/page${page}`);
    } else navigate(`/page${page}`);
  };

  const [isVisible, setIsVisible] = useState(false);

  const showdropdown = () => {
    setIsVisible(!isVisible);
  };

  const hidedropdown = (e) => {
    if (!e.target.closest(`.${styles.dropbtn}`) && isVisible) {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", hidedropdown);
    return () => {
      window.removeEventListener("click", hidedropdown);
    };
  }, [isVisible]);
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

  return (
    <div className={styles.navbar}>
      <div className={styles.navbar}>
        <div className={styles.buttons}>
          <button>
            <FaAnglesUp onClick={handleNext} />
          </button>
          <button>
            <FaAnglesDown onClick={handlePrevious} />
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="pageno"
            value={value.pageno}
            onChange={handleChanges}
          />
          <label>of {totalPages}</label>
        </form>
      </div>
      <button className={styles.dropbtn} onClick={showdropdown}>
        <LuShare2 />
      </button>
      <div
        className={styles.dropdowncontent}
        style={{ display: isVisible ? "block" : "none" }}
      >
        <ul className={styles.drop}>
          <li className={styles.droplink}>
            <a href="#">
              <FaWhatsapp />
            </a>
          </li>
          <li className={styles.droplink}>
            <a href="#">
              <MdEmail />
            </a>
          </li>
          <li className={styles.droplink}>
            <a href="#">
              <FaFacebookF />
            </a>
          </li>
          <li className={styles.droplink}>
            <a href="#">
              <FaLinkedin />
            </a>
          </li>
          <li className={styles.droplink}>
            <a href="#">
              <FaTwitter />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
