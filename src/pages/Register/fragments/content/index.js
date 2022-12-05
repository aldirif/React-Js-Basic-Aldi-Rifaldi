import './styles.css';

function Content (prop) {
  
  return(
    <div className='register-wrapper'>
      <h2>{prop.data}</h2>
      <form>
        <label for="fname">First Name:</label><br></br>
        <input type="text" id="fname"></input><br></br>
        <label for="lname">Last Name:</label><br></br>
        <input type="text" id="lname"></input><br></br>
        <label for="username">Username:</label><br></br>
        <input type="text" id="username"></input><br></br>
        <label for="email">Email:</label><br></br>
        <input type="text" id="email"></input><br></br>
        <label for="password">Password:</label><br></br>
        <input type="password" id="password"></input><br></br>
        <input type="submit" value="submit"></input>
      </form>
    </div>
  );
}

export default Content;