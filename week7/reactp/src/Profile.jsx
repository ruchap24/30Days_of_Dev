
function Profile() {
    let sty={width:400, height:400, background:"white", color:"red"}
  return (
    <div style={sty}>
        <div style={{width:400, height:200, background:"green", color:"red"}}>
            <h2>Profile</h2>
            <p>Name: John Doe</p>
            <p>Email: </p>
        </div>
    </div>
  )
}

export default Profile