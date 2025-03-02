import React from 'react'
import Navbar from '../components/Navbar'
import doctor from '../assets/images/doctor.png'
import two from "../assets/images/two.svg"
import four from "../assets/images/four.svg"
import five from "../assets/images/five.svg"
import six from "../assets/images/six.svg"
import { Link } from 'react-router-dom'

const Home = () => {
    return <div className=' w-screen min-h-screen box-border ' >
        <div className=' w-[100%] h-[100%] ' >

            {/* navbar */}


            {/* section-1 */}
            <div className=' w-[80%] mx-auto  bg-[#5F6FFF] h-[500px] mt-[40px] rounded-lg flex items-center justify-between  ' >
                <div className=' pl-[80px] w-[50%]  h-full flex ' >
                    <div className=' flex flex-col justify-center items-center gap-[10px] ' >
                        <h1 className=' text-5xl font-semibold text-white leading-tight ' >Book Appointment <br />
                            With Trusted Doctors</h1>
                        <div className=' w-full ' >
                            <p className=' text-white pl-[-15px] ' >Simply browse through our extensive list of trusted doctors, <br />
                                schedule your appointment hassle-free.</p>
                        </div>
                        <div className=' flex items-start  w-full' >
                            <div className=' pt-[0.75rem] pb-[0.75rem] pl-[2rem] pr-[2rem] text-black rounded-3xl flex items-center justify-start bg-white text-sm hover:scale-105 transition-all duration-300 ' >
                                <Link to='/signup' >
                                    Create Account
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=' pr-[80px] w-[50%] h-full flex flex-end ' >
                    <div className=' flex items-end ' >
                        <img src={doctor} alt="" className=' ' />
                    </div>
                </div>
            </div>

            {/* section-3 */}
            <div className=' w-[80%] mx-auto flex items-center justify-center flex-col text-balck mt-[50px] gap-[1rem] ' >
                <h1 className=' text-3xl font-medium ' >Find by Speciality</h1>
                <p className=' text-center text-sm max-w-[400px] ' >Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.</p>
                <div className=' flex gap-[1rem] items-center justify-center mt-[10px] ' >
                    <div className=' flex flex-col gap-[5px] items-center hover:translate-y-[-10px] transition-all duration-500 ' >
                        <img src={two} alt="" className=' w-[100px] ' />
                        <p className=' text-sm text-center ' >Gynecologist</p>
                    </div>
                    <div className=' flex flex-col gap-[5px] items-center hover:translate-y-[-10px] transition-all duration-500 ' >
                        <img src={four} alt="" className=' w-[100px] ' />
                        <p className=' text-sm text-center ' >Pediatricians</p>
                    </div>
                    <div className=' flex flex-col gap-[5px] items-center hover:translate-y-[-10px] transition-all duration-500 ' >
                        <img src={five} alt="" className=' w-[100px] ' />
                        <p className=' text-sm text-center ' >Neurologist</p>
                    </div>
                    <div className=' flex flex-col gap-[5px] items-center hover:translate-y-[-10px] transition-all duration-500 ' >
                        <img src={six} alt="" className=' w-[100px] ' />
                        <p className=' text-sm text-center ' >Gastroenterologist</p>
                    </div>
                </div>
            </div>

            


        </div>
    </div>
}

export default Home