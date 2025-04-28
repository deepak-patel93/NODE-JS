const user=(res,req)=>{
    const username=req.params.username;
    res.send(username);

}
export default user;