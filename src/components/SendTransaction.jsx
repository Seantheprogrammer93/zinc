import React from 'react'

function SendTransaction(props) {
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
                        name="toAddress"
                        required="required"
                        placeholder="0x0000000000000000000000000000000000000000"
                        onChange={props.toAddressInputData}
                        class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"/>
                </div>
            </div>
            <div class="md:flex md:items-center mb-6">
                <div class="md:w-1/3">
                    <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-password">
                        Amount
                    </label>
                </div>
                <div class="md:w-2/3">
                    <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
                    type="text"
                    name="amount"
                    required="required"
                    placeholder='amount to send' 
                    onClick={props.amountInputData}/>
                </div>
            </div>
            <div class="md:flex md:items-center">
                <div class="md:w-1/3"></div>
                <div class="md:w-2/3">
                    <button
                        className="inline-flex items-center justify-center rounded-lg border border-gray-200 px-5 py-3 text-gray-500 transition hover:bg-gray-50 hover:text-gray-700 focus:outline-none focus:ring"
                        type="button"
                        onClick={props.sendButton}
                    >
                        Send Transaction ➡️
                    </button>
                </div>
            </div>

        </div>
    )
}

export default SendTransaction