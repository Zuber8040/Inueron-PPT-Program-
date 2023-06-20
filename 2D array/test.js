const  nums = [-4,-1,0,3,10];
  let res = [];
for (var i = 0; i < nums.length; i++) {
    if(nums[i]<0){
      nums[i]*=-1;
      res.push(nums[i]*nums[i]);
    }
   else  res.push(nums[i]*nums[i]);
}
res.sort((a,b)=>a-b)
console.log(res);