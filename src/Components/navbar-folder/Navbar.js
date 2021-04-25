import React from 'react';
import './Navbar.css';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import EmojiFoodBeverageIcon from '@material-ui/icons/EmojiFoodBeverage';
import { useStateValue } from '../state-api-folder/StateProvider';
import { Link } from "react-router-dom";


function Navbar() {

    const [{basket}, dispatch] = useStateValue();


    return (
        <div>
            <div className="navbar">
                <div className="nav-container">
                    <Link to="/" style={{ textDecoration: 'none', color:'red' }}>
                        <div className="title">
                        <EmojiFoodBeverageIcon className="nav-links"/>
                        <h1 >  WE(B)SHOP </h1>
                        <FastfoodIcon/>
                    </div>
                </Link>
                
                <div className="header-ops">
                <Link to="/sign-in"
                style={{ textDecoration: 'none' , color:'white'}}
                >
                <div className="op1">
                        <span>
                            Sign In
                        </span>
                    </div>
                </Link>
                    <Link to="/donation"
                    style={{ textDecoration: 'none' , color:'white'}}
                    >
                    <div className="op2"
                    >
                        <span> Donations</span>
                    </div>
                    </Link>

                    <Link to="/checkout" style={{ textDecoration: 'none' , color:'white'}}>
                    <div className="op3">
                        <span
                        className="nav-links"
                        >Cart</span>
                        <ShoppingCartIcon/>
                        <span
                        className="basket-count"
                        > {basket?.length} </span>
                    </div>    
                    </Link>
                    
                </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;

