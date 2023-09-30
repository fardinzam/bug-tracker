import { FaUser,
  FaLock } from "react-icons/fa";

const LoginForm = () => {
    return (
      <div className="bg-[##E4E4DE] w-96 h-96 rounded-xl mx-auto mt-32 text-center min-w-200">
      <h1 className="font-bold text-3xl pt-5">Login</h1>
      {/* change form into component */}
      <form method="get" name="login" className="flex flex-col mx-5">
        <div className="flex flex-row">
          <input type="text" name="name" autoFocus placeholder="Username" className="mt-5 py-2 pl-5 rounded-full outline-none w-full max-30" />
          <FaUser className="relative right-10 top-8"/>
        </div>
        <div className="flex flex-row">
          <input type="text" name="code" placeholder="Password" className="mt-5 py-2 pl-5 rounded-full outline-none w-full" />
          <FaLock className="relative right-10 top-8"/>
        </div>
        <div className="flex flex-row mt-2 justify-between">
          <div className="flex flex-row">
            <input type="checkbox" className="items-start"/> 
            <p className="pl-2">Remember me</p>
          </div>
          <a href="#">Forgot password?</a>
        </div>
        
        <input type="submit" value="Login" className="mt-5 bg-cyan-500 hover:bg-cyan-600 hover:text-white rounded-full p-2 font-bold w-20em h-20em" />
          <p className="mt-5">Don't have an account? <a href="#" className="hover:underline decoration-solid"><b>Register</b></a> </p>
      </form>
    </div>
    );
  };
  
  export default LoginForm; 