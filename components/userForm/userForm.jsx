import { ErrorMessage, Field, Formik } from "formik";
import { useRouter } from "next/router";
import StarIcon from '@mui/icons-material/Star';
import Image from "next/image";
import { Checkbox, FormControl, FormControlLabel, FormLabel, Icon, IconButton, InputAdornment, InputBase, TextField } from "@mui/material";
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useState } from "react";
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Link from "next/link";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
import axios from 'axios';
const UserForm = () => {

  const route = useRouter();
  const pathName = route.pathname.substring(route.pathname.lastIndexOf("/") + 1) === 'register' ? true : false;
  const [showPassword, setShowPassword] = useState(false)
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const Registerapi = async (value) => {
    try {
      const response = await axios.post('http://localhost:5000/api/v1/register', value)
      console.log(response.data);
    } catch {

    }
  }
  return (
    <>
      <div className="h-screen flex items-center ">

        <div className="flex items-center justify-center    md:w-1/2 h-full    ">
          <div className='flex justify-center'>
            {/* register field code here using formik */}
            <div className=' mr-20 ml-20 lg:ml-20 lg:mr-20 md:ml-8 md:mr-8 '>
              <div className="lg:mb-10 mb-5">
                <Image src="/Logo.svg" width={100} height={100} />
              </div>
              <div className='text-center lg:mb-10 mb-5'>
                <h1 className='mb-4 font-bold lg:text-3xl md:text-2xl text-xl font-sans text-black leading-10 uppercase'> {pathName ? 'Get started now ✨' : "Welcome back 👋"}</h1>


                <p className="text-gray-500  md:text-base text-sm">Lorem ipsum dolor sit amet consectetur. Hendrerit vulputate vitae gravida risus rhoncus. Montes nam amet</p>
              </div>
              <Formik
                enableReinitialize
                initialValues={{
                  fullName: "",
                  email: "",
                  password: "",
                  role: 'admin' || "",
                  term: false

                }}
                validate={(values) => {

                  const error = {};
                  if (!values.term) {
                    error.term = "Fill up condition";
                  }
                  else if (!values.fullName && pathName) {
                    error.fullName = "Please enter your fast name.";
                  }
                  else if (!values.email) {
                    error.email = "Please enter your email";
                  }
                  else if (!values.password) {
                    error.password = "Please enter password";
                  }
                  else if (values.password.length < 6) {
                    error.password = "minimum six character ";
                  }
                  else if (!/^[A-Za-z0-9@#$%]+$/.test(values.password)) {
                    error.password = "Password must contain only letters, numbers, @, #, or $ characters.";
                  }
                  return error;
                }}
                onSubmit={(values, { resetForm }) => {
                  Registerapi(values);
                }}
              >
                {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isSubmitting,

                }) => (
                  <form onSubmit={handleSubmit} className='capitalize space-y-2'>
                    {/* fullname fied  */}
                    {pathName && <div className="mb-4  ">
                      <label htmlFor=" fullName" className="block lg:text-base text-sm font-normal text-gray-700 leading-4  ">
                        Full name
                        <span className="text-red-500"> *</span>
                      </label>
                      <TextField
                        size="small"
                        type="text"
                        name="fullName"
                        placeholder="Please enter your full name"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        id="outlined-multiline-flexible"
                        fullWidth
                        InputProps={{
                          startAdornment: (
                            <Icon color="action" style={{ marginRight: '8px' }}>
                              <PersonOutlineOutlinedIcon />
                            </Icon>
                          ),
                        }}
                      />
                      <ErrorMessage name="fullName" component="div" className="text-red-500 text-sm mt-1" />
                    </div>}

                    {/* email field  */}
                    <div className="mb-4">
                      <label htmlFor="email" className="block lg:text-base text-sm  font-normal text-gray-700  leading-4">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <TextField
                        size="small"
                        type="email"
                        name="email"
                        placeholder="Please enter your email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        id="outlined-multiline-flexible"
                        fullWidth
                        InputProps={{
                          startAdornment: (
                            <Icon color="action" style={{ marginRight: '8px' }}>
                              <EmailOutlinedIcon />
                            </Icon>
                          ),
                        }}
                      />
                      <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
                    </div>

                    {/* password field  */}
                    <div className="mb-4">
                      <label htmlFor="password" className="block lg:text-base text-sm  font-normal text-gray-700  leading-4">
                        Password <span className="text-red-500">*</span>
                      </label>
                      <TextField
                       size="small"
                        type={showPassword ? 'text' : 'password'}
                        name="password"
                        placeholder="Please enter your password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        fullWidth
                        InputProps={{
                          startAdornment: (
                            <Icon color="action" style={{ marginRight: '8px' }}>
                              <LockOutlinedIcon />
                            </Icon>
                          ),
                          endAdornment: (
                            <InputAdornment position="end">
                              <Icon onClick={togglePasswordVisibility} color="action" style={{ cursor: 'pointer' }}>
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                              </Icon>
                            </InputAdornment>
                          ),
                        }}
                      />
                      <ErrorMessage name="password" component="div" className="text-red-500 text-sm mt-1" />
                    </div>

                    {/* register using type  */}
                    {pathName && <div className=" ">
                      <label htmlFor="role" className="block lg:text-base text-sm  font-normal text-gray-700  leading-4 mt-7">
                        Select type of yor role <span className="text-red-500">*</span>
                      </label>

                      <FormControl className="border-2 mt-5" fullWidth>

                        <RadioGroup
                          aria-labelledby="demo-radio-buttons-group-label"
                          defaultValue="admin"
                          name="role"
                          onChange={handleChange}

                        >
                          <div className="grid grid-cols-2  w-full  ">
                            <div className={`${values?.role === 'admin' ? 'text-blue-600 border border-blue-600 ' : ''}  rounded-xl   text-center lg:text-base text-sm`}>
                              <FormControlLabel fullWidth value="admin" control={<Radio />} label="Admin" />
                            </div>
                            <div className={`${values?.role === 'user' ? 'text-blue-600 border border-blue-600 ' : ''}  rounded-xl   text-center lg:text-base text-sm`}>
                              <FormControlLabel value="user" control={<Radio />} label="User" />

                            </div>

                          </div>
                        </RadioGroup>
                      </FormControl>




                      <ErrorMessage name="password" component="div" className="text-red-500 text-sm mt-1" />
                    </div>}
                    {pathName && <div><div className="mb-8 flex items-center mt-4 ">
                      <Checkbox  {...label} name="term" onChange={handleChange}  className="-ml-2.5"/> <p className='text-black8'> I agree to all the
                        <Link href="/userForm/register" className="text-blue-600 hover:underline"> term, Privacy Policy   <span className="text-black">and</span> Fees. </Link>
                      </p>
                    </div>  <ErrorMessage name="term" component="div" className="text-red-500 text-sm mt-1" />
                    </div>}
                    {!pathName && <div className="mb-8 flex justify-between items-center ">
                      <div className="flex items-center">
                        <Checkbox  {...label} /> <p className='text-black8'>  Remember me
                        </p>
                      </div>
                      <div>
                        <Link href="/userForm/register" className="text-blue-600 hover:underline capitalize"> Forgot password </Link>
                      </div>
                    </div>}
                    <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-black8 w-full  font-arial font-bold lg:text-xl text-base">
                      {
                        pathName ? 'Sign up' : 'Log in'
                      }
                    </button>
                  </form>
                )}
              </Formik>

              <div className=" rounded-xl text-black8 text-center   bg-white flex justify-center lg:mt-10 mt-5">
                {!pathName && <p className='text-black8'> Don't have an account?
                  <Link href="/userForm/register" className="text-blue-600 hover:underline"> sign up for free</Link>
                </p>}
                {pathName && <p className='text-black8'>Already have an account?
                  <Link href="/userForm/login" className="text-blue-600 hover:underline"> Log in</Link>
                </p>}

              </div>
            </div>
          </div>
        </div>
        <div className="bg-formImg    bg-cover md:block hidden  bg-no-repeat bg-static  h-screen w-1/2 ">
          <div className="w-full h-full   bg-white8 text-left ">
            <div className="mr-10 ml-10 lg:ml-10 lg:mr-110 md:ml-5 md:mr-5 flex items-end    h-full pb-10">
              <div className="border  lg:p-7 md:p-5 p-3 backdrop-blur-md  text-white rounded-lg">
                <div>
                  <p className="xl:text-2xl lg:text-xl md:text-lg text-base text-justify font-semibold">Given a full text query such das rotes Kleid our approach retrieves matching product images. You can try different queries in the demo and visually inspect retrieved images.</p>
                </div>
                <div className="flex justify-between pt-5">
                  <div>
                    <h1 className="xl:text-2xl lg:text-xl md:text-lg text-base">Cameron Williamson</h1>
                    <h4 className="md:text-base text-sm">Founder, Logobly</h4>
                  </div>
                  <div>
                    {Array.from({ length: 5 }, (_, index) => (
                      <StarIcon key={index} />
                    ))}

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default UserForm;
