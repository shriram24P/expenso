import React, { useState } from "react";
import "./topfold.css";
import { BiSearchAlt } from "react-icons/bi";
import { AiOutlinePlusCircle, AiOutlineLeft } from "react-icons/ai";
import { MdOutlineCancel } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { searchExpense } from "../../redux/actions/expenses";

const TopFold = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch()
  const handleQuerry = (e) => {
    setQuery(e.target.value);
    dispatch(searchExpense(e.target.value));
  };
  return (
    <div className="topfold">
      {window.location.pathname === "/" ? (
        <div className="home-topfold">
          <div className="searchbar">
            <i> 
              <BiSearchAlt />
            </i>
            <input
              value={query}
              placeholder="Search for expenses"
              onChange={(e) => handleQuerry(e)}
            />
          </div>
          <NavLink to="/add-expense">
          <div className="add-button">
            <i>
              <AiOutlinePlusCircle />
            </i>
            <label>Add</label>
          </div>
          </NavLink>
        </div>
      ) : (
        <div className="add-topfold">
        <NavLink to="/">
          <div className="add-topfold-button">
            <i>
              <AiOutlineLeft />
            </i>
            <label>Back</label>
          </div>
        </NavLink>
        <NavLink to="/">
          <div className="add-topfold-button">
            <i>
              <MdOutlineCancel />
            </i>
            <label>Cancel</label>
          </div>
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default TopFold;
