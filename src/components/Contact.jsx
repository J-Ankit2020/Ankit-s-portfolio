import React from 'react'

const Contact = () => {
    return (
        <div className='w-full' id="contact">
            <div
                class="max-w-screen-xl mt-24 px-8 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto  text-gray-900 rounded-lg ">
                <div class="flex flex-col justify-between">
                    <div>
                        <h2 class="text-4xl lg:text-5xl font-bold leading-tight">Lets talk about everything!</h2>
                        <div class="text-gray-700 mt-8">
                            Hate forms? Send me an <a class="underline underline-offset-1 font-medium" href='mailto:jhaa11701@gmail.com' target={'_blank'}>email</a> instead.
                        </div>
                        <img src="/assets/robot.png" alt="" className='w-1/2 mx-auto' />
                    </div>
                    <div class="mt-8 text-center">

                    </div>
                </div>
                <div class="">
                    <div>
                        <span class="uppercase text-sm text-gray-600 font-bold">Full Name</span>
                        <input class="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                            type="text" placeholder="" />
                    </div>
                    <div class="mt-8">
                        <span class="uppercase text-sm text-gray-600 font-bold">Email</span>
                        <input class="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                            type="text" />
                    </div>
                    <div class="mt-8">
                        <span class="uppercase text-sm text-gray-600 font-bold">Message</span>
                        <textarea
                            class="w-full h-32 bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"></textarea>
                    </div>
                    <div class="mt-8">
                        <button
                            class="uppercase text-sm font-bold tracking-wide bg-indigo-500 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline">
                            Send Message
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact