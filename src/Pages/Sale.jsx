import Product1 from "../assets/product1.png";
import Product2 from "../assets/product2.png";
import Product3 from "../assets/product3.png";
import Product4 from "../assets/product4.png";
import Product5 from "../assets/product5.png";
import Product6 from "../assets/product6.png";
import Product7 from "../assets/product7.png";
import Product8 from "../assets/product8.png";

export default function Sale() {

    const Products = [
        {
            id: 1,
            img: Product1,
            name: "T-SHIRT WITH TAPE DETAILS",
            price: "$120",
            star: 4.5,
            discount: "20% OFF"
        },
        {
            id: 2,
            img: Product2,
            name: "SKINNY FIT JEANS",
            price: "$240",
            star: 3.5,
            discount: "15% OFF"
        },
        {
            id: 3,
            img: Product3,
            name: "CHECKERED SHIRT",
            price: "$120",
            star: 4.5,
            discount: "10% OFF"
        },
        {
            id: 4,
            img: Product4,
            name: "STEEVE STRIPED T-SHIRT",
            price: "$120",
            star: 4.5,
            discount: "25% OFF"
        },
        {
            id: 5,
            img: Product5,
            name: "VERTICAL STRIPED SHIRT",
            price: "$120",
            star: 4.5,
            discount: "30% OFF"
        },
        {
            id: 6,
            img: Product6,
            name: "COURAGE GRAPHIC T-SHIRT",
            price: "$120",
            star: 4.5,
            discount: "18% OFF"
        },
        {
            id: 7,
            img: Product7,
            name: "LOOSE FIT BERMUDA SHORTS",
            price: "$120",
            star: 4.5,
            discount: "12% OFF"
        },
        {
            id: 8,
            img: Product8,
            name: "FADED SKINNY JEANS",
            price: "$120",
            star: 4.5,
            discount: "22% OFF"
        },
    ]

    return (
        <section className="mt-[17px]">
            <div className="side py-10 flex flex-col gap-10">
                <h1 className='h'>NEW ARRIVALS</h1>

                <div className="grid md:grid-cols-4 grid-cols-2 gap-6 justify-center">
                    {
                        Products.slice(0, 4).map((item) => (
                            <div key={item.id} className="w-full ">
                                <img src={item.img} alt={item.name} className="w-[300px] h-[300px] object-cover rounded-3xl" />
                                <h2 className='text-[20px] font-bold'>{item.name}</h2>
                                <div className="flex gap-1">
                                    {[...Array(5)].map((_, index) => (
                                        <span key={index} className="text-yellow-400">
                                            {index < Math.floor(item.star) ? '★' : '☆'}
                                        </span>
                                    ))}
                                    <p className="text-[14px] text-gray-600">({item.star})</p>
                                </div>
                                <span className="flex gap-2">
                                    <p className='text-[24px]'>{item.price}</p>
                                    <p className='bg-red-300 flex justify-center items-center w-[58px] text-[12px] text-white rounded-3xl'>{item.discount}</p>
                                </span>
                            </div>
                        ))
                    }
                </div>

                <button className="border-2 border-black w-[200px] py-2 rounded-full mx-auto hover:bg-black hover:text-white transition-all">
                    See More
                </button>
            </div>

            <div className="side py-10 flex flex-col gap-10">
                <h1 className='h'>NEW ARRIVALS</h1>

                <div className="grid md:grid-cols-4 grid-cols-2 gap-6 justify-center">
                    {
                        Products.slice(4, 8).map((item) => (
                            <div key={item.id} className="w-full ">
                                <img src={item.img} alt={item.name} className="w-[300px] h-[300px] object-cover rounded-3xl" />
                                <h2 className='text-[20px] font-bold'>{item.name}</h2>
                                <div className="flex gap-1">
                                    {[...Array(5)].map((_, index) => (
                                        <span key={index} className="text-yellow-400">
                                            {index < Math.floor(item.star) ? '★' : '☆'}
                                        </span>
                                    ))}
                                    <p className="text-[14px] text-gray-600">({item.star})</p>
                                </div>
                                <span className="flex gap-2">
                                    <p className='text-[24px]'>{item.price}</p>
                                    <p className='bg-red-300 flex justify-center items-center w-[58px] text-[12px] text-white rounded-3xl'>{item.discount}</p>
                                </span>
                            </div>
                        ))
                    }
                </div>

                <button className="border-2 border-black w-[200px] py-2 rounded-full mx-auto hover:bg-black hover:text-white transition-all">
                    See More
                </button>
            </div>

        </section>
    )
}
