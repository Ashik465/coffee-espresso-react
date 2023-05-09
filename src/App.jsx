
import { Link,  } from 'react-router-dom'
import './App.css'
import CoffeeCard from './components/CoffeeCard';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

function App() {
  
  // const loadCoffees = useLoaderData();
  const [coffees, setCoffees] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:5000/coffee')
    .then(res=>res.json())
    .then(data=>setCoffees(data))
  },[])

  const handleDelete=(id)=>{
    console.log(id);
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
        

        fetch(`http://localhost:5000/coffee/${id}`,{
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
          
            console.log(data);

            if(data.deletedCount){
                Swal.fire({
                    title: 'Success!',
                    text: 'Coffee deleted successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })

                  const remainingCoffees = coffees.filter(coffee=>coffee._id!==id);
                  setCoffees(remainingCoffees);
            }
       
       
        })

        
        }
      })




  }


  return (
    <div className='mx-auto container'>
      
      <h1 className=' text-6xl text-center text-purple-400 my-10'>Our popular coffee</h1>
      <div className=' text-center my-5'>
        <Link to='/addcoffee' className='btn text-lg'>Add a coffee</Link>
        </div>
     {/* card section */}
        <div className=' grid md:grid-cols-2 gap-4'>
          {
           coffees.map((coffee)=> <CoffeeCard key ={coffee._id}
           coffee={coffee} handleDelete={handleDelete}></CoffeeCard>) 
          }

        </div>
      
    </div>
  )
}

export default App
