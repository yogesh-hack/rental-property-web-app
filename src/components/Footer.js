
const Footer = () => {
    return (
        <div class="w-full p-4 text-center bg-[#0a8051] text-white border border-gray-200 shadow sm:p-8">
            
            <h5 class="mb-2 text-3xl font-bold dark:text-white">Connecting You to Your Dream Rental</h5>
            <p class="mb-5 text-base sm:text-lg dark:text-gray-400">Discover the perfect property that suits your needs.</p>
            <div class="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
            <p className="text-sm">
          &copy; {new Date().getFullYear()} Totality Corp Property Hub. All rights reserved.
        </p>
            </div>
        </div>
    )
}

export default Footer