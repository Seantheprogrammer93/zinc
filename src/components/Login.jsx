import React from 'react'

function Login(props) {
    return (
        <section>
            <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-black">
                    <img class="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo" />
                    Zinc
                </a>
                <div class="bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
                    <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 class="text-center text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                            Sign up or sign in to your account
                        </h1>
                        <p class="text-left text-sm text-gray-900 md:text-md">
                            Zinc is a non-custodial crypto wallet. We do not store your private keys on our servers. <span class="underline">Simply enter your email address to start.</span>
                        </p>
                        <form class="space-y-4 md:space-y-6" action="#">
                            <div>
                                <label for="email" class="block mb-2 text-sm font-medium text-gray-900">Your email</label>
                                <input onChange={props.emailInputData} type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="email@example.com" required="" />
                            </div>
                            <button onClick={props.loginButton} type="submit" class="w-full text-white bg-blue-500 hover:bg-blue-500 font-medium rounded-lg text-sm px-2 py-2 text-center">Sign up / Sign in</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Login