import toast from "react-hot-toast";
 
 
const AddProduct = () => {
    const handleProduct = () => {
        toast.success('Product added successfully')
    }
    const handleAddProduct = e => {
        
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const brand = form.brand.value;
        const photo = form.photo.value;
        const type = form.type.value;
        const description = form.description.value;
        const price = form.price.value;
        const rating = form.rating.value;

        const addProduct= {
            name,
            brand,
            photo,
            type,
            description,
            price,
            rating
        }
        console.log(addProduct)
        fetch('http://localhost:5000/addProduct', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(addProduct)	
        })
        .then(res => res.json())
        .then(data => {
console.log(data);
        })
     }
    return (
        <div className="  p-20">
        <h2 className="text-5xl text-center font-bold">Add a Product</h2>
        <form onSubmit={handleAddProduct}>
             <div className="md:flex mb-8">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Product Name</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="name" placeholder="Product Name" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                        <span className="label-text">Brand Name</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="brand" placeholder="Brand Name" className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
 
            <div className="md:flex mb-8">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Photo URL</span>
                    </label>
                    <label className="input-group">
                        <input type="photo" name="photo" placeholder="Photo URL  " className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                        <span className="label-text">Type</span>
                    </label>
                    <label className="input-group">
                        <input type="select" name="type" placeholder="Type" className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
             <div className="md:flex mb-8">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Price  </span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="price" placeholder="Price  " className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                        <span className="label-text">Rating</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="rating" placeholder="Rating" className="input input-bordered w-full" />
                    </label>
                </div>
                
            </div>
            <div className="mb-8">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Short Description</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="description" placeholder="Short Description" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
             
            <div className="flex justify-center  items-center">
            <input onClick={handleProduct} type="submit" value="Add Product" className="btn bg-blue-500 text-white hover:bg-blue-500" />
            </div>

        </form>
    </div>
 
    );
};

export default AddProduct;