import Hero from '../Assets/hero.png'
import Brands from '../Components/Brands'
import Sale from './Sale'

export default function Home() {

    return (
        <section>
            <div className='side mt-16 grid md:grid-cols-2 items-center justify-center bg-(--secondaryColor) gap-8'>
                <div>
                    <div className='flex flex-col gap-10 mt-20'>
                        <h1 className='Header'>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
                        <p className='p'>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
                        <button className='button'>Shop Now</button>
                    </div>

                    <div className='grid md:grid-cols-3 grid-cols-2 items-center justify-between mt-10 gap-4'>
                        <span className=''>
                            <h2 className='h2'>200+</h2>
                            <p className='p'>International Brands</p>
                        </span>
                        <span className=''>
                            <h2 className='h2'>2000+</h2>
                            <p className='p'>High-Quality Products</p>
                        </span>
                        <span className=''>
                            <h2 className='h2'>30000+</h2>
                            <p className='p'>Happy Customers</p>
                        </span>
                    </div>
                </div>

                <picture>
                    <img src={Hero} className='md:h-[800px] object-cover' />
                </picture>
            </div>

            <Brands />

            <Sale />

        </section>
    )
}
