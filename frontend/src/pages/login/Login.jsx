

function Login() {
  return (
    <div className="flex justify-center items-center min-w-96 mx-auto ">
      <div className="h-full p-6 w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 border border-gray-100">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Login
          <span className="text-blue-500"> ChatApp</span>
        </h1>
        <form>
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
          <a href="#" className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block">Don't have an account?</a>
          <div>
            <button className="btn btn-block mt-2 btn-sm ">LogIn</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;




//starter code for this file
// function Login() {
//   return (
//     <div className="flex justify-center items-center min-w-96 mx-auto ">
//       <div className="h-full p-6 w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 border border-gray-100">
//         <h1 className="text-3xl font-semibold text-center text-gray-300">
//           Login
//           <span className="text-blue-500"> ChatApp</span>
//         </h1>
//         <form>
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
//           <a href="#" className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block">Don't have an account?</a>
//           <div>
//             <button className="btn btn-block mt-2 btn-sm ">LogIn</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Login;
