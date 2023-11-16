import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
import OAuth from "../components/oAuth";

const signin = () => {
  const [formData, setformData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) =>{
    setformData({
      ...formData, 
      [e.target.id] : e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await fetch('/api/auth/signIn', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      console.log(data);

      if (data.success === false) {
        setLoading(false);
        setError(data.message);
        return;
      }
      setLoading(false);
      // setError(null);
      navigate('/');
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };
  return (
    <div><>
    <div className="py-16">
      <div className="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
        <div
          className="hidden lg:block lg:w-1/2 bg-cover"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fHJlYWwlMjBlc3RhdGV8ZW58MHx8MHx8fDA%3D")'
          }}
        ></div>
        <div className="w-full p-8 lg:w-1/2">
          <h2 className="text-2xl font-semibold text-gray-600 text-center font-serif">
            NestWise
          </h2>
          <p className="text-xl text-gray-600 text-center">Welcome back!</p>
          <OAuth/>
          <div className="mt-4 flex items-center justify-between">
            <span className="border-b w-1/5 lg:w-1/4" />
            <a href="#" className="text-xs text-center text-gray-500 uppercase">
              or login with email
            </a>
            <span className="border-b w-1/5 lg:w-1/4" />
          </div>
          <form onSubmit={handleSubmit}>
          <div className="mt-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email Address
            </label>
            
            <input
              className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
              type="email"
              id='email'
              onChange={handleChange}
            />
          </div>
          <div className="mt-4">
            <div className="flex justify-between">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Password
              </label>
              <a href="#" className="text-xs text-gray-500">
                Forget Password?
              </a>
            </div>
            <input
              className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
              type="password"
              onChange={handleChange}
              id='password'
            />
          </div>
          <div className="mt-8">
            <button disabled={loading} className="bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600">
         {loading ? 'Loading...' : 'sign in'}
              
            </button>
          </div>
            </form>
          <div className="mt-4 flex items-center justify-between">
            <span className="border-b w-1/5 md:w-1/4" />
            <a href="/signUp" className="text-xs text-gray-500 uppercase">
              or sign up
            </a>
            <span className="border-b w-1/5 md:w-1/4" />
            {error && <p className='text-red-500 mt-5'>{error}</p>}
          </div>
        </div>
      </div>
    </div>
  </>
  </div>
  )
}

export default signin