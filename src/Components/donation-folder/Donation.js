import React from 'react';
import AppleIcon from '@material-ui/icons/Apple';
import SearchIcon from '@material-ui/icons/Search';
import EmojiNatureTwoToneIcon from '@material-ui/icons/EmojiNatureTwoTone';
import CreateTwoToneIcon from '@material-ui/icons/CreateTwoTone';
import LocalPharmacyTwoToneIcon from '@material-ui/icons/LocalPharmacyTwoTone';
import NoteIcon from '@material-ui/icons/Note';
import HealingIcon from '@material-ui/icons/Healing';
import Productdo from './Productdo'
export const Donation = () => {

    return (
        <div>
            <div style={{marginTop:'2vh', display:'flex', flexWrap:'wrap', justifyContent:'center'}}>
                <Productdo id="1" title="Apples" price = {0.59} image = {<AppleIcon
                className="apple" 
                />}/>

                <Productdo id="2" title="Honey" price ={10.99} image = {<EmojiNatureTwoToneIcon
                className="apple"
                />}/>

                <Productdo id="3" title="Pencils" price ={5.59} image = {<CreateTwoToneIcon
                className="apple"
                />}/>
                <Productdo id="4" title="Medicine" price ={5.99} image = {<LocalPharmacyTwoToneIcon
                className="apple"
                />}/>

                <Productdo id="5" title="Notes" price ={2.79} image = {<NoteIcon
                className="apple"
                />}/>

                <Productdo id="5" title="Band-Aids" price ={2.59} image = {<HealingIcon
                className="apple"
                />}/>
                </div>
        </div>
    )
}
