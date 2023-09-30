import { AiFillHome,
         AiFillSetting,
         AiFillPlusCircle,
         AiFillCheckCircle } from "react-icons/ai";

const Dashboard = () => {
    return (
      <div className="w-full flex flex-row">
          <div className="bg-[#E9DED7] w-2/12 flex flex-col">
            <div className="hover:bg-[#DBC9BD]">
              <p>[Name]</p>
              <p>email</p>
            </div>
            <div className="hover:bg-[#DBC9BD] w-[95%] mx-auto rounded-sm flex flex-row">
              <AiFillHome classname="p-2"/>
              <a href="#">Home</a>
            </div>
            <div className="hover:bg-[#DBC9BD] w-[95%] mx-auto rounded-sm flex flex-row">
              <AiFillCheckCircle classname="p-2"/>
              <a href="#">Tickets</a>
            </div>
            <div className="hover:bg-[#DBC9BD] w-[95%] mx-auto rounded-sm flex flex-row">
              <AiFillSetting classname="p-2"/>
              <a href="#">Settings</a>
            </div>
            <div className="hover:bg-[#DBC9BD] w-[95%] mx-auto rounded-sm flex flex-row">
              <AiFillPlusCircle classname="p-2"/>
              <a href="#">New Project</a>
            </div>
          </div>
          <div className="flex-col w-10/12 relative">
            <div className="bg-[#50413A] h-1/6">
              <h1 className="text-4xl font-extrabold ml-4">Dashboard</h1>
            </div>
            <div className="flex justify-center items-center h-5/6">
              <div className="bg-[#E3C2AF] flex align-center justify-center my-auto mx-auto" style={{height:"95.67%", width:"97%"}}>
                list of repos/updates on repos (scrolling feed) half and half split view
              </div>
            </div>
          </div>
      </div>
    );
  };
  
  export default Dashboard;
  