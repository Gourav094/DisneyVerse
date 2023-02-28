import React from 'react'
import styled from 'styled-components'
import style from 'styled-components'
function header() {
  return (
    <Nav>
        <Logo src="/images/logo.svg"/>
        <NavMenu>
            <a>
                <img src="/images/home-icon.svg"/>
                <span>Home</span>
            </a>
            <a>
                <img src="/images/watchlist-icon.svg"/>
                <span>Watchlist</span>
            </a>
            <a>
                <img src="/images/original-icon.svg"/>
                <span>originals</span>
            </a>
            <a>
                <img src="/images/movie-icon.svg"/>
                <span>Movies</span>
            </a>
            <a>
                <img src="/images/series-icon.svg"/>
                <span>Series</span>
            </a>
            <a>
                <search>
                
                </search>
                <Wrap>

                   Search
                <img src="/images/search-icon.svg"/>
                </Wrap>
            </a>

        </NavMenu>
        <UserImg src="/images/Profile.jpg"/>
    </Nav>
  )
}

export default header

const Nav = styled.nav`
    height: 70px;
    background:#090b13;
    display:flex;
    align-items:center;
    padding:0 36px;
    overflow-x:hidden;
`
const Logo = styled.img`
    width: 80px;
`

const NavMenu = styled.div`
    display:flex;
    flex:1;
    margin-left:25px;
    align-items:center;
    a{
        display:flex;
        align-items:center;
        padding: 0 12px;
        cursor:pointer;
        img{
            height:20px;

        }
        search{
            margin-left:30px;
        }
        span{
            font-size:13px;
            letter-spacing:1.42px;
            position:relative;
            &:after{
                content:"";
                height:2px;
                background:white;
                position:absolute; 
                left:0;
                right:0;
                bottom:-6px;
                opacity:0;  
                transform-origin:left center;
                transition: all 250ms cubic-bezier(0.25,0.46,0.45,0.94)0s;
                transform:scalex(0);
            }
        }
        &:hover{
            span:after{
                opacity:1;
                transform:scalex(1);
            }
        }
    }
`

const UserImg= styled.img`
    width:40px;
    height:40px;
    border-radius:50%;
    cursor:pointer;

`

const Wrap = styled.div`
    width: 240px;
    position: relative;
    height: 25px;
    border-bottom: 1px solid rgba(255,255,255,0.6);
    color:rgba(255,255,255,0.6);
    font-size: 16px;
    padding: 0 28px 0 0px;
    
    img{
        height:15px;
        width:16px;
        position:absolute;
        opacity:0.7;
        top:7px;
        right:0px;
    }
    
}

`