import React from 'react';
import  Product  from '../product-folder/Product';
import './Home.css';
import AppleIcon from '@material-ui/icons/Apple';
import SearchIcon from '@material-ui/icons/Search';
import EmojiNatureTwoToneIcon from '@material-ui/icons/EmojiNatureTwoTone';
import CreateTwoToneIcon from '@material-ui/icons/CreateTwoTone';
import LocalPharmacyTwoToneIcon from '@material-ui/icons/LocalPharmacyTwoTone';
import NoteIcon from '@material-ui/icons/Note';
import HealingIcon from '@material-ui/icons/Healing';
const Home = () => {
    return (
        <div>
            <div className="home-container">
                <img
                className="home-image"
                src="https://techcrunch.com/wp-content/uploads/2015/03/groceries-e1554037962210.jpg"
                >
                </img>
                <h1 className="s"> Discover the variety of items at Weshop!</h1>

<div className="header-search">

                    <input
                    className="search-form"
                    type="text"
                    ></input>
                    <i class="fas fa-search"></i>
                </div>

                <div style={{marginTop:'2vh', display:'flex', flexWrap:'wrap', justifyContent:'center'}}>
                <Product id="1" title="Apples" price = {0.59} image = {<AppleIcon
                className="apple"
                />}/>

                <Product id="2" title="Honey" price ={10.99} image = {<EmojiNatureTwoToneIcon
                className="apple"
                />}/>

                <Product id="3" title="Pencils" price ={5.59} image = {<CreateTwoToneIcon
                className="apple"
                />}/>
                <Product id="4" title="Medicine" price ={5.99} image = {<LocalPharmacyTwoToneIcon
                className="apple"
                />}/>

                <Product id="5" title="Notes" price ={2.79} image = {<NoteIcon
                className="apple"
                />}/>

                <Product id="5" title="Band-Aids" price ={2.59} image = {<HealingIcon
                className="apple"
                />}/>
                </div>
            </div>
        </div>
    )
}

export default Home
