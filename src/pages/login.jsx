
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {

  const navigate = useNavigate();

  const [formdata, setFormdata] = useState({
    username: "",
    password: ""
  });

  function handlechange(e) {
    setFormdata({
      ...formdata,
      [e.target.name]: e.target.value
    });
  }

  const formsubmit = (event) => {
    event.preventDefault();

    console.log(formdata);

    navigate("/dashboard", {
      state: formdata
    });
  };

  return (
    <div>
      <form onSubmit={formsubmit}>

        <input
          type="text"
          placeholder="Enter your username"
          required
          name="username"
          value={formdata.username}
          onChange={handlechange}
        />

        <input
          type="password"
          placeholder="Enter your password"
          required
          name="password"
          value={formdata.password}
          onChange={handlechange}
        />

        <button type="submit">Submit</button>

      </form>
    </div>
  );
}

export default Login;
