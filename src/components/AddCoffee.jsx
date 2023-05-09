import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'

const AddCoffee = () => {

const handleAddCoffee = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const availableQuantity = e.target.quantity.value;
    const supplier = e.target.supplier.value;
    const taste = e.target.taste.value;
    const category = e.target.category.value;
    const details = e.target.details.value;
    const photoURL = e.target.photoURL.value;
    const coffee = {
        name, availableQuantity, supplier, taste, category, details, photoURL   };
    console.log(coffee);

    fetch('http://localhost:5000/coffee',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(coffee)
    })
    .then(res=>res.json())
    .then(data=>{console.log(data)
    
    if(data.insertedId){
        Swal.fire({
            title: 'Success!',
            text: 'Coffee added successfully',
            icon: 'success',
            confirmButtonText: 'Cool'
          })
    }
    
    })



};




  return (
    <div className=" bg-[#F4F3F0] p-24">
      <h1 className="text-3xl font-extrabold">Add a coffee</h1>

      <form onSubmit={handleAddCoffee}>
       {/* form  name and available quantity row */}
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <label className="input-group">
             
              <input
                type="text"
                name="name"
                placeholder="Name of the coffee"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 md:ml-4">
            <label className="label">
              <span className="label-text">Available-quantity</span>
            </label>
            <label className="input-group">
             
              <input
                type="text"
                name="quantity"
                placeholder="Available-quantity"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
       {/* form  supplier and taste row */}
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">supplier</span>
            </label>
            <label className="input-group">
             
              <input
                type="text"
                name="supplier"
                placeholder="Name of the supplier"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 md:ml-4">
            <label className="label">
              <span className="label-text"> Taste</span>
            </label>
            <label className="input-group">
             
              <input
                type="text"
                name="taste"
                placeholder="Taste of the coffee"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
       {/* form  category and details quantity row */}
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">category</span>
            </label>
            <label className="input-group">
             
              <input
                type="text"
                name="category"
                placeholder="category of the coffee"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 md:ml-4">
            <label className="label">
              <span className="label-text">Details</span>
            </label>
            <label className="input-group">
             
              <input
                type="text"
                name="details"
                placeholder="Details of the coffee"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
       {/* form  photo URL row */}
        <div className="mb-8">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">photo URL</span>
            </label>
            <label className="input-group">
             
              <input
                type="text"
                name="photoURL"
                placeholder="photo-URL of the coffee"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          
        </div>
         {/* form  submit button */}
        <input type="submit" value="Add-Coffee" className="btn btn-block" />
      </form>
      <div className=' text-center my-5'>
        <Link to='/' className='btn text-lg'>Back to Home</Link>
        </div>
    </div>
  );
};

export default AddCoffee;
