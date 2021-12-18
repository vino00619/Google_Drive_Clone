import React from 'react'
import GDriveLogo from '../../media/Google_Drive_icon_(2020).svg.png'
import SearchIcon from '@mui/icons-material/Search';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const index = () => {
    return (
        <div className='header'>
            <div className='header_logo'>
                <img src={GDriveLogo} alt=''/>
                <span>Drive</span>
            </div>
            <div className='header_searchContainer'>
                <SearchIcon />
                <ExpandMoreIcon />
            </div>
            <div className='header_icons'></div>
        </div>
    )
}

export default index
