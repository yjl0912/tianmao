// 引入uuid (临时id)
import { v4 as uuidv4 } from "uuid";

function getUserTempId() {
  let userTempId = localStorage.getItem("userTempId");
  // 判断是否有id
  if (userTempId) {
    return userTempId;
  }
  // 没有就生成一个临时id
  userTempId = uuidv4();
  localStorage.setItem("userTempId", userTempId);
  return userTempId;
}
export default getUserTempId;
