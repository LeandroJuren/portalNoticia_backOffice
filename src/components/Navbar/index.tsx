import React, { Component } from "react";
import styled from "styled-components";
import "../Navbar"

//NAVBAR PRONTA

const Teste = styled.div`
    #menu-toggle:checked + #menu {
        display: block;
    }
`;

class Navbar extends Component {
    render = () => {
        return (
            <Teste>
                <header className="lg:px-16 px-8 bg-black flex flex-wrap items-center py-4 shadow-md">
                    <div className="flex-1 flex justify-between items-center">
                        <a className="flex items-center" href="https://www.pilotosdavila.com.br/">
                            <img src="https://i.imgur.com/xC5MgVW.png" />
                        </a>
                    </div>
                    <label htmlFor="menu-toggle" className="pointer-cursor md:hidden block">
                        <svg className="fill-current text-white mr-2"
                            xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 20 20">
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                        </svg>
                    </label>
                    <input className="hidden" type="checkbox" id="menu-toggle" />
                    <div className="hidden md:flex md:items-center md:w-auto w-full" id="menu">
                        <nav>
                            <ul className="md:flex grid grid-cols-2 items-center justify-between text-base text-white pt-4 md:pt-0">
                                <a href="https://www.pilotosdavila.com.br/" className="hidden md:block classA text-lg p-3 mr-5 hover:text-red-500">SITE PRINCIPAL</a>
                            </ul>
                        </nav>
                    </div>
                </header>
            </Teste>
        );
    };
}
export default Navbar;
