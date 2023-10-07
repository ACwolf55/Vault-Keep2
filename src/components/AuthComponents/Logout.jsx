import React, {useState} from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Logout() {
    const navigate = useNavigate();
    
    const username = sessionStorage.getItem("username")
    const id = sessionStorage.getItem("id")

    if (username === sessionStorage("username")) {
        sessionStorage.clear()
    }

};

export default Logout;