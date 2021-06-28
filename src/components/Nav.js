import React, {useState} from "react";
import styled from "styled-components";
import {motion} from "framer-motion";
import logo from "../img/logo.svg"
//redux and routes
import { searchGame } from "../actions/gamesAction";
import { useDispatch } from "react-redux";

const Nav = () => {
    const dispatch = useDispatch();
    const [textInput, setTextInput] = useState("");

    const textHandler = (e) => {
        setTextInput(e.target.value)
    }

    const submitSearch = (e) => {
        e.preventDefault();
        dispatch(searchGame(textInput))
        setTextInput("")
    }

    const clearSearched = () => {
        dispatch({type:"CLEAR_SEARCHED"})
    }

    return(
        <StyledNav>
            <Logo>
                <img onClick={clearSearched} src={logo}alt="" />

            </Logo>
            <form className="search">
                <h1>Lighter</h1>
                <input onChange={textHandler} value={textInput} type="text" />
                <button onClick={submitSearch}type="submit" >Search</button>
            </form>
        </StyledNav>

    )

};

const StyledNav = styled(motion.nav)`
    padding:3rem 5rem;
    text-align: center;
    input{
        width:30%;
        font-size:1.5rem;
        padding:0.5rem;
        border:none;
        margin-top:1rem;
        box-shadow: 0px 0px 30px rgba(0,0,0,0.2)
    }

`

const Logo = styled(motion.div)`
    display:flex;

`

export default Nav
