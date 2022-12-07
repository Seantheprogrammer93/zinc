import React from 'react'

function Login(props) {
    return (
        <section>
            <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-black">
                    <img class="w-8 h-8 mr-2" src="/logo.svg" alt="logo" />
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
                        <div class="space-y-4 md:space-y-6">
                            <input onChange={props.emailInputData} type="email" name="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="email@example.com" required="" />
                            <button onClick={props.loginButton} type="submit" class="w-full text-white bg-blue-500 hover:bg-blue-500 font-medium rounded-lg text-sm px-2 py-2 text-center">Sign up / Sign in</button>

                            <button>
                                <a href='https://github.com/Seantheprogrammer93/zinc'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                                    </svg>
                                </a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Login