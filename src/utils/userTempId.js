import { v4 as uuidV4 } from "uuid";


function generateUserTempId(){
  let userTempId = localStorage.getItem("userTempId");
  if (!userTempId) {
    userTempId = uuidV4();
   localStorage.setItem("userTempId",userTempId);
  }
  return userTempId
}




export default generateUserTempId;
