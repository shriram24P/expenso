import React, { useState } from "react";
import "./topfold.css";
import { BiSearchAlt } from "react-icons/bi";
import {AiOutlinePlusCircle} from "react-icons/ai";

const TopFold = () => {

    const [querry, setQuerry] = useState("");
    const handleQuerry = (e)=>{
        setQuerry(e.target.value);
    }
  return (
    <div className="topfold">
    {window.location.pathname!=='/'? <div className="home-topfold">
        <div className="searchbar">
          <i>
            <BiSearchAlt />
          </i>
          <input
            value={querry}
            placeholder="Search for expenses"
            onChange={(e) => handleQuerry(e)}
          />
        </div>
        <div className="add-button">
            <i>
                <AiOutlinePlusCircle />
            </i>
            <label>Add</label>
        </div>
      </div>:(
        <div className="add-topfold">

        </div>
        )}
    
    </div>
  );
};

export default TopFold;
