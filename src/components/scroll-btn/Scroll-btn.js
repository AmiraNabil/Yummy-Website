import React from "react";
import './Scroll-btn.css';
import { faArrowCircleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function AppScrollBtn(){
    return(
        <>
              <a href="#" className="scroll-top d-flex align-items-center justify-content-center">
                <FontAwesomeIcon icon={faArrowCircleUp}></FontAwesomeIcon>
              </a>
        </>
    )
}