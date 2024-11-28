import React from 'react';

const AddForm = () => {

    const handleAddCoffee = (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const quantity = e.target.quantity.value;
        const supplier = e.target.supplier.value;
        const taste = e.target.taste.value;
        const category = e.target.category.value;
        const details = e.target.details.value;
        const image = e.target.image.value;

        const newCoffee = { name, quantity, supplier, taste, category, details, image }
        console.log(newCoffee)

        // Sending data to the database
        fetch('http://localhost:5000/coffee',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
        .then(res=>res.json())
        .then(data=> {
            console.log('Successfully added the data', data);
        })
    }

    return (
        <div className='w-3/4 mx-auto bg-[#f4f3f0] py-5'>
            <h2 className='text-center my-8 text-3xl font-bold'>Add Coffee</h2>
            <form onSubmit={handleAddCoffee}>
                <div className='flex '>
                    <div class="form-control card-body">
                        <label class="label">
                            <span class="label-text">Coffee Name</span>
                        </label>
                        <input type="text" placeholder="Coffee Name" class="input input-bordered" name='name' required />
                    </div>
                    <div class="form-control card-body">
                        <label class="label">
                            <span class="label-text">Available Quantity</span>
                        </label>
                        <input type="text" placeholder="Available Quantity" class="input input-bordered" name='quantity' required />
                    </div>
                </div>
                <div className='flex '>
                    <div class="form-control card-body">
                        <label class="label">
                            <span class="label-text">Supplier</span>
                        </label>
                        <input type="text" placeholder="Supplier Name" class="input input-bordered" name='supplier' required />
                    </div>
                    <div class="form-control card-body">
                        <label class="label">
                            <span class="label-text">Taste</span>
                        </label>
                        <input type="text" placeholder="Taste" class="input input-bordered" name='taste' required />
                    </div>
                </div>
                <div className='flex '>
                    <div class="form-control card-body">
                        <label class="label">
                            <span class="label-text">Category</span>
                        </label>
                        <input type="text" placeholder="Category" class="input input-bordered" name='category' required />
                    </div>
                    <div class="form-control card-body">
                        <label class="label">
                            <span class="label-text">Details</span>
                        </label>
                        <input type="text" placeholder="Details" class="input input-bordered" name='details' required />
                    </div>
                </div>
                <div className='flex'>

                    <div class="form-control card-body">
                        <label class="label">
                            <span class="label-text">Photo URL</span>
                        </label>
                        <input type="text" placeholder="Photo URL" class="input input-bordered" name='image' required />
                    </div>
                </div>
                <div className='px-4'>
                    <button type='submit' class="btn w-full bg-[#d2b48c] text-white font-rancho text-xl border-[#614d47]">Add Coffee</button>
                </div>
            </form>
        </div>
    );
};

export default AddForm;