import React from 'react'

const Signup = () => {
  return (
    <div className="flex flex-col h-screen justify-center items-center gap-2">
      <div className="flex flex-col gap-2 ">
        <label htmlFor="name">Enter Your Full Name *</label>
        <input
          id="name"
          type="text"
          placeholder="Enter Your Name"
          className="border px-2 py-1 rounded  "
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="email">Enter Your Email *</label>
        <input
          id="email"
          type="email"
          placeholder="Enter Your Email"
          className="border px-2 py-1 rounded  "
        />
      </div>
      <div className='flex flex-col gap-2'>
        <label htmlFor="pass">Enter Your Password *</label>
        <input id="pass" type="password" className='border px-2 py-1 rounded ' placeholder="Enter Your Password" />
      </div>
    </div>
  );
}

export default Signup