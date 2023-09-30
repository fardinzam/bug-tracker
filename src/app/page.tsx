import { FaUser,
         FaLock } from "react-icons/fa";

export default function Home() {
  return (
    <div className="bg-[url('../../public/teamMeeting.jpg')] bg-cover w-full bg-no-repeat select-none">
      <div className="absolute text-[#1B1B1B] font-extrabold text-6xl w-[589px] top-[140px] left-[650px]">Elevate Team Management: Unite, Lead, Succeed.</div>
      <div className="bg-[#E9DED7] w-96 h-96 rounded-xl ml-32 left-3/4 mt-32 text-center min-w-200 shadow-2xl">
        <h1 className="font-bold text-3xl pt-5">Login</h1>
        <form method="get" name="login" className="flex flex-col mx-5">
          <div className="flex flex-row">
            <input type="text" name="name" autoFocus placeholder="Username" className="mt-5 py-2 pl-5 rounded-full outline-none w-full bg-transparent border-2 border-[#ffffff]" />
            <FaUser className="relative right-10 top-8"/>
          </div>
          <div className="flex flex-row">
            <input type="text" name="code" placeholder="Password" className="mt-5 py-2 pl-5 rounded-full outline-none w-full bg-transparent border-2 border-[#ffffff]" />
            <FaLock className="relative right-10 top-8"/>
          </div>
          <div className="flex flex-row mt-2 justify-between">
            <div className="flex flex-row">
              <input type="checkbox" className="hover:cursor-pointer"/> 
              <p className="pl-2">Remember me</p>
            </div>
            <a href="#" className="hover:underline decoration-solid">Forgot password?</a>
          </div>
          
          <input type="submit" value="Login" className="mt-5 bg-[#ffffff] hover:text-[#746861] hover:cursor-pointer rounded-full p-2 font-semibold" />

          <p className="mt-5">Don't have an account?
            <a href="#" className="hover:underline decoration-solid pl-1"><b>Register</b></a>
          </p>
        </form>
      </div>
    </div>
  )
}
