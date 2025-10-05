import React from 'react';
import { useLoaderData } from 'react-router';
import PlantCard from '../Components/PlantCard';

const Home = () => {
    const data = useLoaderData()
    const {plants} = data.data
    // console.log(plants);
    
    
    return (
        <div>
            <h1 className='text-3xl flex justify-center text-green-500 '>All Plants</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                plants.map(plant => <PlantCard key={plant.id} plant={plant}></PlantCard>)
            }
            </div>
        </div>
    );
};

export default Home;