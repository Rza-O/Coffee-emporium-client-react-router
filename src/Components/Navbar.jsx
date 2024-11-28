import React from 'react';

const Navbar = () => {
    return (
        <div className="navbar bg-base-100  justify-center bg-navBar">
            <div className="navbar-center">
                <img src="/logo1.png" className='w-14 h-14' alt="" />
                <a className="btn btn-ghost text-3xl font-normal font-rancho text-white">Espresso Emporium</a>
            </div>
        </div>
    );
};

export default Navbar;