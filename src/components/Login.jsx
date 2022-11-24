import React from 'react'

function Login(props) {
    return (
        <section className="bg-white">
            <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
                <section
                    className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6"
                >
                    <img
                        alt="Night"
                        src="https://images.unsplash.com/photo-1632516643720-e7f5d7d6ecc9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1311&q=80"
                        className="absolute inset-0 h-full w-full object-cover opacity-80"
                    />

                    <div className="hidden lg:relative lg:block lg:p-12">
                        <a className="block text-white" href="/">
                            <span className="sr-only">Home</span>
                        </a>

                        <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
                            Welcome to Zinc!
                        </h2>

                        <p className="mt-4 leading-relaxed text-white/90">
                            Zinc is a non-custodial cryptocurrency wallet.
                        </p>
                    </div>
                </section>

                <main
                    aria-label="Main"
                    className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:py-12 lg:px-16 xl:col-span-6"
                >
                    <div className="max-w-xl lg:max-w-3xl">
                        <div className="relative -mt-16 block lg:hidden">
                            <a
                                className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-white text-blue-600 sm:h-20 sm:w-20"
                                href="/"
                            >
                                <span className="sr-only">Home</span>
                            </a>

                            <h1
                                className="mt-2 text font-bold text-black sm:text-3xl md:text-4xl"
                            >
                                Welcome to Zinc!
                            </h1>

                            <p className="mt-4 leading-relaxed text-black">
                                Zinc is a non-custodial cryptocurrency wallet.
                            </p>
                        </div>
                        <input
                            type="email"
                            name="email"
                            required="required"
                            placeholder="Enter your email"
                            onChange={props.emailInputData}
                        />
                        <button
                            className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
                            onClick={props.loginButton}
                        >
                            Login
                        </button>
                    </div>
                </main>
            </div>
        </section>

    )
}

export default Login