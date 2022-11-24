import React from 'react'

function SignMessage() {
    return (
        <div class="w-full max-w-sm">
            <div class="md:flex md:items-center mb-6">
                <div class="md:w-1/3">
                    <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                        To Address
                    </label>
                </div>
                <div class="md:w-2/3">
                    <input
                        type="text"
                        name="message"
                        required="required"
                        placeholder="Your message"
                        onChange={props.messageInputData}
                        class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" />
                </div>
            </div>
            <div class="md:flex md:items-center">
                <div class="md:w-1/3"></div>
                <div class="md:w-2/3">
                    <button
                        className="inline-flex items-center justify-center rounded-lg border border-gray-200 px-5 py-3 text-gray-500 transition hover:bg-gray-50 hover:text-gray-700 focus:outline-none focus:ring"
                        type="button"
                        onClick={props.signMessageButton}
                    >
                        Sign Message 🖊️
                    </button>
                </div>
            </div>

        </div>
    )
}

export default SignMessage