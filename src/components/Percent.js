import React from "react";
import "../Css/Percent.css";
import usePercent from "../customhooks/usePercent";
const Percentage = () => {

    //made use of custom hook for getting the scroll %
    const { load } = usePercent();

    return (
        <>
            <div className="loader">
                <p className="p">{load} %</p>
            </div>
        </>
    );

}

export default Percentage;