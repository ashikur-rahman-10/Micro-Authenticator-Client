import React, { useRef } from 'react';

const Booking = () => {
    const formRef = useRef(null);

    const formLogin = (event) => {
        event.preventDefault();
        const from = event.target;
        const email = from.email.value;
        const image = from.image.value;
        const name = from.name.value;
        const classV = from.classV.value;
        const sit = from.sit.value;
        const ins = from.ins.value;
        const price = from.price.value;
        const add = { name, image, sit, ins, price, email }
        console.log(add);

        const saveLoggedUser = { email: add.email, classV, name: add.displayName, image, sit, price }
        formRef.current.reset();
    }
    return (
        <div className='w-full'>
           <form onSubmit={formLogin} ref={formRef} className="flex flex-col space-y-4">
  <div className="card-body rounded-xl mt-20">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="form-control">
        <label className="label">
          <span className="label-text text-white">Which Project You Want</span>
        </label>
        <input
          type="text"
          name="classV"
          placeholder="Technology Name"
          className="input input-bordered w-full"
          required
        />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text text-white">Figma/PDF </span>
        </label>
        <input
          type="file"
          name="file"
          placeholder="file"
          className="input input-bordered"
          required
        />
      </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="form-control">
        <label className="label">
          <span className="label-text text-white">Requirements</span>
        </label>
        <input
          type="text"
          name="ins"
          placeholder="What's you want to adding"
          className="input input-bordered w-full"
          required
        />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text text-white">Your Email</span>
        </label>
        <input
          type="text"
          name="email"
          placeholder="Email"
          className="input input-bordered w-full"
          required
        />
      </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="form-control">
        <label className="label">
          <span className="label-text text-white">Project Need In</span>
        </label>
        <input
          type="date"
          name="sit"
          placeholder=" Sit"
          className="input input-bordered w-full"
          required
        />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text text-white">Your Budget</span>
        </label>
        <input
          type="number"
          name="price"
          placeholder="$00"
          className="input input-bordered w-full"
          required
        />
      </div>
    </div>
    <div className="form-control mt-6">
      <button className="btn btn-primary">Submit</button>
    </div>
  </div>
</form>

        </div>
    );
};

export default Booking;