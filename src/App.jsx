
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
    <div >
    

    {/* banner section  */}

    <div className="hero min-h-screen" style={{ backgroundImage: `url('../src/images/more/3.png')` }}>
  <div className="hero-overlay bg-opacity-0"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className=" max-w-lg">
      <h1 className="mb-5 text-5xl font-bold">Would you like a Cup of Delicious Coffee?</h1>
      <p className="mb-5">It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>


   
   <div className='mx-auto container'>

  


      
      {/* our popular coffee */}
      <h1 className=' text-6xl text-center text-purple-400 my-10'>Our popular coffee</h1>
      <div className=' text-center my-5'>
        <Link to='/addcoffee' className='btn text-lg'>Add a coffee</Link>
        </div>
     {/* card section */}
        <div className=' grid md:grid-cols-2 gap-4 my-10'>
          {
           coffees.map((coffee)=> <CoffeeCard key ={coffee._id}
           coffee={coffee} handleDelete={handleDelete}></CoffeeCard>) 
          }

        </div>
        </div>

    {/* footer section  */}

    <footer className="footer bg-[#F4F3F0] relative pt-1 border-b-2 border-blue-700">
    <div className="container mx-auto px-6">

        <div className="sm:flex sm:mt-8 w-full sm:justify-between">
            <div className="mt-8 sm:mt-0 sm:w-full sm:px-8 flex flex-col md:flex-row justify-between">
                <div className="flex flex-col">
                    <span className="font-bold text-gray-700 uppercase mb-2">About Us</span>
                    <span className="my-2"><a href="#" className="text-blue-700  text-md hover:text-blue-500">Company Information</a></span>  
                    <span className="my-2"><a href="#" className="text-blue-700  text-md hover:text-blue-500">Privacy Policy</a></span>
                    <span className="my-2"><a href="#" className="text-blue-700  text-md hover:text-blue-500">Terms & Conditions</a></span>

                      </div>
                    <div className="flex flex-col">




               
                    <span className="font-bold text-gray-700 uppercase mt-4 md:mt-0 mb-2 mr-5">Categories</span>
                    <span className="my-2"><a href="#" className="text-blue-700  text-md hover:text-blue-500">Coffee</a></span>
                    <span className="my-2"><a href="#" className="text-blue-700  text-md hover:text-blue-500">Tea</a></span>
                    <span className="my-2"><a href="#" className="text-blue-700  text-md hover:text-blue-500">Juice</a></span>
                    <span className="my-2"><a href="#" className="text-blue-700  text-md hover:text-blue-500">Milk</a></span>
                    <span className="my-2"><a href="#" className="text-blue-700  text-md hover:text-blue-500">Soft Drinks</a></span>

                    </div>
                    <div className="flex flex-col">
                    <span className="font-bold text-gray-700 uppercase mt-4 md:mt-0 mb-2">Quick Links</span>
                    <span className="my-2"><a href="#" className="text-blue-700  text-md hover:text-blue-500">Home</a></span>
                    <span className="my-2"><a href="#" className="text-blue-700  text-md hover:text-blue-500">About Us</a></span>
                    <span className="my-2"><a href="#" className="text-blue-700  text-md hover:text-blue-500">Contact Us</a></span>
                    <span className="my-2"><a href="#" className="text-blue-700  text-md hover:text-blue-500">Privacy Policy</a></span>
                    <span className="my-2"><a href="#" className="text-blue-700  text-md hover:text-blue-500">Terms & Conditions</a></span>

                    </div>
                    </div>
                    </div>
                    </div>
                    </footer>
                    


















    </div>
  )
}

export default App
