
function ProfilePicture(){
    const imageUrl ='./src/images/channel-5.jpeg';
    const handleClick =(e)=> e.target.style.display ="none";

    return(
        <img onClick={(e)=>handleClick(e)} src={imageUrl} alt="" />
    )
}
export default ProfilePicture