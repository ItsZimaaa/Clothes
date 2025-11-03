import admin from "../assets/AdminPage.jpg"
import { Link } from 'react-router-dom';

import Logo from '../Assets/Logo.svg';


export default function Admin() {
    return (
        <div
            className="h-screen bg-cover bg-center mt-17 p-8 flex items-center"
            style={{ backgroundImage: `url(${admin})` }}>

            <div className="flex w-full h-full">
                <div>
                    <div>
                        <Link><img src={Logo} alt="Shop.co" className='' /></Link>
                    </div>
                </div>

                <div className="">
                    <h1 className='text-white h'>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
                    <p className='p text-white'>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
                </div>
            </div>
        </div>
    )
}
