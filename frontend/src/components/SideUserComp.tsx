import { FiMoreVertical } from "react-icons/fi";
import {ChatDetails} from "../store/atoms/Chat";
import { useSetRecoilState } from "recoil";

const SideUserComp = ({ user }: any) => {

  const setChatDetails = useSetRecoilState(ChatDetails);

  const handleclick = () =>{
    setChatDetails(user);
  }

  return (
    <div className="flex items-center cursor-pointer rounded-lg justify-between bg-[#2B2D31] p-3" onClick={()=>handleclick()}>
      <div className="flex gap-2 items-center">
        <img
          src={user.profile}
          className="rounded-[50%] max-h-[10vh] md:max-h-[5vh] object-cover"
          alt="logo"
        />
        <div className="">
          <h1 className="text-[2vh] font-bold">{user.name}</h1>
          <p className="text-[1.7vh] font-medium text-gray-500">
            @{user.username}
          </p>
        </div>
      </div>
      <FiMoreVertical />
    </div>
  );
};

export default SideUserComp;


