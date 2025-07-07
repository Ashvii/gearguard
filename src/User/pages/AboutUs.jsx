import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'


function AboutUs() {
    return (
        <>
            <section className='banner py-10'>
                <Header />
                <h1 className='m-10 text-center pt-10 text-3xl'>About Us</h1>
            </section>

            <section className='AboutUs'>

                <div className="grid md:grid-cols-2 gap-12 items-center m-20">

                    {/* Left Side Heading */}
                    <div>
                        <h2 className="text-3xl md:text-4xl font-semibold text-[#00587A] leading-snug">
                            We help automotive users fulfil their repair,
                            maintenance and support needs.
                        </h2>
                    </div>

                    {/* Right Side Paragraph */}
                    <div>
                        <p className="text-gray-800 leading-relaxed text-justify">
                            Our journey started in 2021 with a vision to provide assistance to stranded vehicles
                            as well as build an online community of automotive technicians. The idea drew
                            inspiration from the selfless contributions of community service workers during the
                            pandemic. Our founding partners with their years of experience in the automotive
                            sector developed Auto Aid for this purpose. The Auto Aid App connects vehicle owners
                            and automotive service providers on a single platform enabling a hassle-free journey.
                            Vehicle Owners are able to easily find the nearest automotive service personnel at
                            their fingertips while Automotive Technicians increase their revenues by servicing
                            new customers.
                        </p>
                    </div>

                </div>
            </section>

            <section className="max-w-7xl mx-auto px-4 py-20">
                <h2 className="text-4xl font-bold text-center text-[#00587A] mb-16">
                    Building a more sustainable future
                </h2>

                <div className="grid md:grid-cols-2 gap-10 items-center">
                    {/* Left Content */}
                    <div>
                        <h3 className="text-3xl font-bold text-yellow-300 mb-6">Environmental</h3>

                        <div className="mb-8">
                            <h4 className="text-xl font-semibold text-[#00587A] mb-2">
                                Pollution & Waste
                            </h4>
                            <p className="text-gray-800 leading-relaxed">
                                Our entire workflow is managed digitally through our App, reducing paper usage.
                                We also use environment-friendly products to service vehicles.
                            </p>
                        </div>

                        <div>
                            <h4 className="text-xl font-semibold text-[#00587A] mb-2">
                                Resource & Land Use
                            </h4>
                            <p className="text-gray-800 leading-relaxed">
                                Refurbishment of vehicle components always takes precedence over new resource consumption.
                                We actively promote recycling and are particular about the disposal of auto parts
                                to reduce landfills.
                            </p>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="flex justify-center">
                        <img
                            src="https://cdn.pixabay.com/photo/2018/04/04/13/38/nature-3289812_1280.jpg"
                            alt="Sustainable Earth"
                            className="rounded-2xl shadow-lg w-full max-w-md"
                        />
                    </div>
                </div>
            </section>

            <section className="max-w-7xl mx-auto px-4 py-20">
                <div className="grid md:grid-cols-2 gap-10 items-center">
                    {/* Left Image */}
                    <div className="flex justify-center">
                        <img
                            src='https://cdn.pixabay.com/photo/2022/10/07/10/11/road-7504719_1280.jpg'
                            alt="Road and Safety Illustration"
                            className="rounded-2xl shadow-lg w-full max-w-2xl"
                        />
                    </div>

                    {/* Right Content */}
                    <div>
                        <h3 className="text-3xl font-bold text-yellow-300 mb-6">Social</h3>

                        <div className="mb-8">
                            <h4 className="text-xl font-semibold text-[#00587A] mb-2">
                                Health & Safety
                            </h4>
                            <p className="text-gray-800 leading-relaxed">
                                The formation of Auto Aid was driven by a genuine concern for the safety
                                of those stranded on roads & highways. We ensure rapid response to reduce
                                the duration motorists are stranded, minimizing exposure to potential hazards.
                            </p>
                        </div>

                        <div>
                            <h4 className="text-xl font-semibold text-[#00587A] mb-2">
                                Community Impact
                            </h4>
                            <p className="text-gray-800 leading-relaxed">
                                Continuously providing additional revenue to more than 3,000 members of the
                                Automobile Technician community. We also support local businesses and contribute
                                to local economies.
                            </p>
                        </div>
                    </div>
                </div>
            </section>


            <section className="max-w-7xl mx-auto px-4 py-20">
                <div className="grid md:grid-cols-2 gap-10 items-center">
                    {/* Left Content */}
                    <div>
                        <h3 className="text-3xl font-bold text-yellow-300 mb-6">Governance</h3>

                        <div className="mb-8">
                            <h4 className="text-xl font-semibold text-[#00587A] mb-2">
                                Risk Management
                            </h4>
                            <p className="text-gray-800 leading-relaxed">
                                Our service is essentially providing a solution to manage the risks of
                                automobile breakdowns. We adhere to stringent safety standards and maintain
                                transparency in our operations, offering the utmost assurance to our customers.
                            </p>
                        </div>

                        <div>
                            <h4 className="text-xl font-semibold text-[#00587A] mb-2">
                                Leadership & Corporate Governance
                            </h4>
                            <p className="text-gray-800 leading-relaxed">
                                We are a platform for Technician communities and are demonstrating beneficial
                                new ways of providing service. Our leadership ensures an unbiased, ethical and
                                inclusive workspace promoting innovation and efficiency.
                            </p>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="flex justify-center">
                        <img
                            src='https://cdn.pixabay.com/photo/2017/04/05/19/34/leader-2206099_1280.jpg'
                            alt="Governance and Leadership"
                            className="rounded-2xl shadow-lg w-full max-w-2xl"
                        />
                    </div>
                </div>
            </section>

            <Footer/>




        </>
    )
}

export default AboutUs
