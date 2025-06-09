import React from 'react';
import Header from '../Components/Header';
import { Link } from "react-router-dom";

function OurServices() {
    const token = sessionStorage.getItem("token");

    return (
        <div>
            <section className='banner py-10'>
                <Header />
                <h1 className='m-10 text-center pt-10 text-3xl'>Our Services</h1>
            </section>

            {token ? (
                <>
                    <h1 className='text-center text-3xl my-4'>BREAKDOWN SERVICES</h1>

                    <div className="Breakdown grid md:grid-cols-3 gap-12 items-center m-5">
                        <Link to={'/Breakdown'}>
                            <div className="battery border border-red-800 p-5 rounded-lg hover:shadow-lg text-center">
                                <img src="/images/1.gif" alt="JumpStart" className='w-32 h-32 mx-auto' />
                                <h1 className='text-xl p-5'>Battery Jump Start</h1>
                            </div>
                        </Link>

                        <Link to={'/Repair'}>
                            <div className="miner border border-red-800 p-5 rounded-lg hover:shadow-lg text-center">
                                <img src="/images/2.gif" alt="Minor Repair" className='w-32 h-32 mx-auto' />
                                <h1 className='text-xl p-5'>Minor Repair</h1>
                            </div>
                        </Link>

                        <Link to={'/FlatTyre'}>
                            <div className="tyre border border-red-800 p-5 rounded-lg hover:shadow-lg text-center">
                                <img src="/images/3.gif" alt="Flat Tyre" className='w-32 h-32 mx-auto' />
                                <h1 className='text-xl p-5'>Flat Tyre Repair</h1>
                            </div>
                        </Link>
                    </div>
                </>
            ) : (
                <div className="flex justify-center items-center h-screen">
                    <Link to="/login">
                        <img
                            src="https://cdn-icons-gif.flaticon.com/17905/17905768.gif"
                            alt="Login Required"
                            className="w-60 h-60"
                        />
                    </Link>
                </div>
            )}
        </div>
    );
}

export default OurServices;
