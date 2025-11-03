import { PiShoppingBagOpenFill } from 'react-icons/pi';
import { MdAccountCircle } from 'react-icons/md';
import { IoSearchOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';

import Logo from '../Assets/Logo.svg';
import { RiMenu4Line, RiMenu5Fill } from 'react-icons/ri';
import { use, useState } from 'react';

export default function Navbar() {

    const [Open, setOpen] = useState(false);
    const isOpen = () => {
        setOpen(!Open);
    }


    return (
        <div>
            <nav className="side flex justify-between items-center py-4 fixed top-0 left-0 right-0 z-10 bg-white">

                <div>
                    <Link to={"/"}><img src={Logo} alt="Shop.co" className='' /></Link>
                </div>

                <ul className='md:flex hidden gap-6'>
                    <Link to={"/Sale"}>On sale</Link>
                    <Link to={"/"}>New Arrival</Link>
                    <Link to={"/"}>Brands</Link>
                </ul>

                <div className='md:flex hidden w-[50%] bg-(--secondaryColor) rounded-full px-4 py-2 items-center gap-2'>
                    <input
                        type="text"
                        placeholder="Search for products..."
                        className="flex-1 bg-transparent outline-none text-sm"
                    />
                    <button aria-label="Search"><IoSearchOutline /></button>
                </div>
                <div className='flex gap-4 text-2xl'>
                    <PiShoppingBagOpenFill className='text-3xl' />
                    <Link to={"/Admin"}><MdAccountCircle className='text-3xl' /></Link>
                    <RiMenu5Fill onClick={isOpen} className="cursor-pointer md:hidden text-3xl" />
                </div>

            </nav>


            {
                Open && (

                    <div
                        className="fixed inset-0 bg-black/40 z-20"
                        aria-hidden="true"
                    >

                        <aside
                            className="absolute right-0 top-0 h-full py-4 side w-72 bg-white shadow-lg flex flex-col gap-6"
                            role="dialog"
                            aria-label="Mobile menu"
                        >
                            <div className="flex items-center justify-between">
                                <Link to={"/"} onClick={() => setOpen(false)}>
                                    <h1 className='font-black'>Menu</h1>
                                </Link>
                                <button
                                    onClick={() => setOpen(false)} className="text-2xl"><RiMenu4Line /></button>
                            </div>

                            <nav className="flex flex-col gap-4 text-base">
                                <Link to="/sale" onClick={() => setOpen(false)} className="py-2">On sale</Link>
                                <Link to="/new" onClick={() => setOpen(false)} className="py-2">New Arrival</Link>
                                <Link to="/brands" onClick={() => setOpen(false)} className="py-2">Brands</Link>
                            </nav>

                            <div className="mt-auto flex flex-col gap-4">
                                <div className="flex items-center gap-2 bg-gray-100 rounded-full px-3 py-2">
                                    <input
                                        type="text"
                                        placeholder="Search for products..."
                                        className="flex-1 bg-transparent outline-none text-sm"
                                    />
                                    <button aria-label="Search"><IoSearchOutline /></button>
                                </div>

                                <div className="flex items-center justify-between text-2xl">
                                    <div className="flex items-center gap-4">
                                        <PiShoppingBagOpenFill />
                                    </div>
                                    <Link to="/Admin" onClick={() => setOpen(false)} className="text-sm"> Account</Link>
                                </div>
                            </div>
                        </aside>
                    </div>
                )
            }
        </div>
    )
}
