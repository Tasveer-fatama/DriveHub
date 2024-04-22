import React from "react";


const carList = [
  {
    name: "BMW UX",
    price: 100,
    image:"https://stimg.cardekho.com/images/car-images/large/Audi/Audi-A3/3079/225_Vegas-yellow_bf9e13.jpg?impolicy=resize&imwidth=420",
    aosDelay: "0",
  },
  {
    name: "KIA UX",
    price: 140,
    image: "https://imgd.aeplcdn.com/370x208/n/nfhdrsa_1477929.jpg?q=80",
    aosDelay: "500",
  },
  {
    name: "BMW UX",
    price: 100,
    image:"https://www.shutterstock.com/image-illustration/red-city-car-blank-surface-260nw-1363868852.jpg",
    aosDelay: "1000",
  },
];

const CarList = () => {
  return (
    <div ClassName={{}} 
     style={{ backgroundImage: `url()` }}>
      <div className="container">
        {/* Heading */}
        <h1
          data-aos="fade-up"
          className="text-3xl sm:text-4xl font-semibold font-serif  mt-8 mb-3 text-center"
        >
         Book Now: Starting at (price) per day
        </h1>
        <p data-aos="fade-up" aos-delay="400" className="text-xl pb-10">
       Locking in your perfect ride is easy! . This all-inclusive rate covers your basic needs, including mileage and standard insurance, with no hidden fees. To see a personalized quote including any taxes or additional coverage options, simply enter your desired dates and location. Don't miss out – book now and hit the road with incredible savings!
        </p>
        {/* Car listing */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16">
            {carList.map((data) => (
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                className="space-y-3 border-2 border-gray-300 hover:border-primary p-3 rounded-xl relative group"
              >
                <div className="w-full h-[120px]">
                  <img
                    src={data.image}
                    alt=""
                    className="w-full h-[120px] object-contain sm:translate-x-8 group-hover:sm:translate-x-16 duration-700"
                  />
                </div>
                <div className="space-y-2">
                  <h1 className="text-primary font-semibold">{data.name}</h1>
                  <div className="flex justify-between items-center text-xl font-semibold">
                    <p>${data.price}/Day</p>
                    <a href="#">Details</a>
                  </div>
                </div>
                <p className="text-xl font-semibold absolute top-0 left-3">
                  12Km
                </p>
              </div>
            ))}
          </div>
        </div>
        {/* End of car listing */}
        <div className="grid place-items-center mt-8">
          <button data-aos="fade-up" className="button-outline">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarList;