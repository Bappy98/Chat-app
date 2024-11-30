import React from 'react'
import GenderCheckbox from './GenderCheckbox'

function SingUp() {
  return (
    <div className='flex flex-col justify-center items-center min-w-96 mx-auto'>
      <div className='bg-gray-400 h-full w-full p-6 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 border border-gray-100 '>
      <h1 className="text-3xl font-semibold text-center text-gray-300">
          Sing Up
          <span className="text-blue-500"> ChatApp</span>
        </h1>
        <form>
        <div>
            <label className="label p-2">
              <span className="text-base label-text">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter full name"
              className="w-full input input-bordered h-10"
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter username"
              className="w-full input input-bordered h-10"
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="text"
              placeholder="Enter password"
              className="w-full input input-bordered h-10"
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Confirm password</span>
            </label>
            <input
              type="text"
              placeholder="Enter confirm password"
              className="w-full input input-bordered h-10"
            />
          </div>
          <GenderCheckbox/>
          <a href="#" className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block">Already have an account?</a>
          <div>
            <button className="btn btn-block mt-2 btn-sm ">Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SingUp



// import GenderCheckbox from './GenderCheckbox'

// function SingUp() {
//   return (
//     <div className='flex flex-col justify-center items-center min-w-96 mx-auto'>
//       <div className='bg-gray-400 h-full w-full p-6 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 border border-gray-100 '>
//       <h1 className="text-3xl font-semibold text-center text-gray-300">
//           Sing Up
//           <span className="text-blue-500"> ChatApp</span>
//         </h1>
//         <form>
//         <div>
//             <label className="label p-2">
//               <span className="text-base label-text">Full Name</span>
//             </label>
//             <input
//               type="text"
//               placeholder="Enter full name"
//               className="w-full input input-bordered h-10"
//             />
//           </div>
//           <div>
//             <label className="label p-2">
//               <span className="text-base label-text">Username</span>
//             </label>
//             <input
//               type="text"
//               placeholder="Enter username"
//               className="w-full input input-bordered h-10"
//             />
//           </div>
//           <div>
//             <label className="label p-2">
//               <span className="text-base label-text">Password</span>
//             </label>
//             <input
//               type="text"
//               placeholder="Enter password"
//               className="w-full input input-bordered h-10"
//             />
//           </div>
//           <div>
//             <label className="label p-2">
//               <span className="text-base label-text">Confirm password</span>
//             </label>
//             <input
//               type="text"
//               placeholder="Enter confirm password"
//               className="w-full input input-bordered h-10"
//             />
//           </div>
//           <GenderCheckbox/>
//           <a href="#" className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block">Already have an account?</a>
//           <div>
//             <button className="btn btn-block mt-2 btn-sm ">Sign Up</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   )
// }

// export default SingUp