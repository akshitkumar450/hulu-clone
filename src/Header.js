import React from 'react'
import './Header.css'
import HomeIcon from '@material-ui/icons/Home';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
function Header() {
    return (
        <div className='header'>
            <div className='header__icons'>
                <div className='header__icon'>
                    <HomeIcon />
                    <p>Home</p>
                </div>
                <div className='header__icon'>
                    <FlashOnIcon className='header__icon' />
                    <p className='header__active'>Trending</p>
                </div>
                <div className='header__icon'>
                    <LiveTvIcon className='header__icon' />
                    <p className='header__active'> VERIFIED</p>
                </div>
                <div className='header__icon'>
                    <VideoLibraryIcon className='header__icon' />
                    <p className='header__active'>Videos</p>
                </div>
                <div className='header__icon'>
                    <PermIdentityIcon className='header__icon' />
                    <p className='header__active'>User</p>
                </div>
            </div>
            <div className='header__title'>
                <h1>hulu</h1>
            </div>
        </div>
    )
}

export default Header
