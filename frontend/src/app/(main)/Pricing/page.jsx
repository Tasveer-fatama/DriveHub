'use client'
import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar';

const CarCard = ({ car }) => {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg bg-white">
      <img className="w-full" src={car.image} alt={car.name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{car.name}</div>
        <p><strong>Brand:</strong> {car.brand}</p>
        <p><strong>Year:</strong> {car.year}</p>
        <p><strong>Type:</strong> {car.type}</p>
        <p><strong>Seats:</strong> {car.seats}</p>
        <p><strong>Price:</strong> {car.price}</p>
        <button className="bg-black text-white py-2 px-4 rounded mt-4">Book Now</button>
      </div>
    </div>
  );
}

const CarList = () => {
  const [filterType, setFilterType] = useState(null);
  const [filterSeats, setFilterSeats] = useState(null);

  const [carsList, setCarsList] = useState([]);

  const cars = [
    {
      name: 'Toyota Camry',
      brand: 'Toyota',
      year: 2023,
      type: 'Sedan',
      seats: 5,
      price: '$25,000',
      image: 'https://stimg.cardekho.com/images/carexteriorimages/630x420/Kia/Sonet/9783/1705036728978/front-left-side-47.jpg?impolicy=resize&imwidth=480'
    },
    {
      name: 'Toyota Camry',
      brand: 'Toyota',
      year: 2023,
      type: 'Sedan',
      seats: 5,
      price: '$25,000',
      image: 'https://stimg.cardekho.com/images/carexteriorimages/630x420/Kia/Sonet/9783/1705036728978/front-left-side-47.jpg?impolicy=resize&imwidth=480'
    },
    {
      name: 'Toyota Camry',
      brand: 'Toyota',
      year: 2023,
      type: 'Sedan',
      seats: 5,
      price: '$25,000',
      image: 'https://stimg.cardekho.com/images/carexteriorimages/630x420/Kia/Sonet/9783/1705036728978/front-left-side-47.jpg?impolicy=resize&imwidth=480'
    },
    {
      name: 'Toyota Camry',
      brand: 'Toyota',
      year: 2023,
      type: 'Sedan',
      seats: 5,
      price: '$25,000',
      image: 'https://stimg.cardekho.com/images/carexteriorimages/630x420/Kia/Sonet/9783/1705036728978/front-left-side-47.jpg?impolicy=resize&imwidth=480'
    },
    {
      name: 'Toyota Camry',
      brand: 'Toyota',
      year: 2023,
      type: 'Sedan',
      seats: 5,
      price: '$25,000',
      image: 'https://stimg.cardekho.com/images/carexteriorimages/630x420/Kia/Sonet/9783/1705036728978/front-left-side-47.jpg?impolicy=resize&imwidth=480'
    },
    {
      name: 'Toyota Camry',
      brand: 'Toyota',
      year: 2023,
      type: 'Sedan',
      seats: 5,
      price: '$25,000',
      image: 'https://stimg.cardekho.com/images/carexteriorimages/630x420/Kia/Sonet/9783/1705036728978/front-left-side-47.jpg?impolicy=resize&imwidth=480'
    },
    // Add more cars as needed
  ];


  const fetchCarData = () => {
     fetch('http://localhost:5000/car/getall')
          .then((response) => {
              console.log(response.status);
              return response.json();
          })
          .then((data) => {
              console.log(data);
              setCarsList(data);
          })
          .catch((err) => {
              console.log(err);
          });
  }
  
  const displayCars = () => {
    if(carsList.length > 0){
      return carsList.map(car => (
        <div key={car._id} className="m-4">
            <CarCard car={car} />
          </div>
      ))
    }else{
      return <h3>No Cars Avaialable</h3>
    }
  }

  useEffect(() => {
    fetchCarData();
  }, [])

  const handleResetFilters = () => {
    setFilterType(null);
    setFilterSeats(null);
  }

  const filteredCars = cars.filter(car => {
    if (filterType && car.type !== filterType) {
      return false;
    }
    if (filterSeats && car.seats !== filterSeats) {
      return false;
    }
    return true;
  });

  return (
    <div>
      <Sidebar/>
      <div className="flex justify-end">
        <button onClick={handleResetFilters} className="m-2"></button>
      </div>
      <div className="flex flex-wrap justify-center">
        {displayCars()}
      </div>
    </div>
  );
}

export default CarList;