import axios from "axios";


export const  reqGetCatelist = () => {
   axios({
    method: "get",
    url: "http://182.92.128.115/api/product/getBaseCategoryList",
  })
    .then((response) => {
      // console.log("请求成功了",response.data);
      const result = response.data.data
      localStorage.setItem('catelist', JSON.stringify(result));
    })
    .catch((error) => {
      console.log("请求失败",error);
      
    });
};
