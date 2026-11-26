
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { registerSchema } from '../components/formschema/registerSchema';

function Register() {

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(registerSchema)
  });

  function onSubmit(data) {
    console.log(data);
    alert("Registration successful!");
    navigate("/");
  }

  return (
    <div>
      <h2>Register Page</h2>

      <form onSubmit={handleSubmit(onSubmit)}>

        {/* Name */}
        <input
          type="text"
          placeholder="Enter your name"
          {...register("name")}
        />
        <p>{errors.name?.message}</p>

        {/* Email */}
        <input
          type="email"
          placeholder="Enter your email"
          {...register("email")}
        />
        <p>{errors.email?.message}</p>

        {/* Password */}
        <input
          type="password"
          placeholder="Enter your password"
          {...register("password")}
        />
        <p>{errors.password?.message}</p>

        {/* Age */}
        <input
          type="number"
          placeholder="Enter your age"
          {...register("age")}
        />
        <p>{errors.age?.message}</p>

        <button type="submit">Register</button>

      </form>
    </div>
  );
}

export default Register;
