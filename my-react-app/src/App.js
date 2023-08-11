import "./style.css";

function App() {
  return (
    <>
      <form>
        <h1>student details</h1>
        <div>
          <label for="f_name">First name</label><br />
          <input type="text" name="f_name" id="f_name" />
        </div>
        <div>
          <label for="l_name">Last Name</label><br />
          <input type="text" name="l_name" id="l_name" />
        </div>
        <div>
          <label for="dob">Date of birth</label><br />
          <input type="date" name="dob" id="dob" />
        </div>
        <div>
          <input type="radio" name="gender" id="male" value="male" />
          <label for="male" style={{marginRight: "20px"}}>Male</label>
          <input type="radio" name="gender" id="female" value="female" />
          <label for="female">Female</label>
        </div>
        <div>
          <label for="email">Email</label><br />
          <input type="email" name="email" id="email" />
        </div>
        <div>
          <label for="mob">Phone number</label><br />
          <input type="text" name="mobile" id="mob" />
        </div>
        <div>
          <label for="address">Address</label><br />
          <textarea cols="35" rows="6" />
        </div>
        <input type="submit" name="submit" id="submit" />
      </form>
    </>
  );
}

export default App;
