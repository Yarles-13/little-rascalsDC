import Link from "next/link"
const CalltoAction = () => {
  return (
    <div className=" text-center bg-blue-500 py-4">
      <h4 className="text-2xl font-bold text-gray-800">
        Discover the Little Rascals Difference
      </h4>
      <p className="mt-2 text-gray-600">
        Ready to see why families have trusted us for over two decades? Schedule a tour today.
      </p>
      <Link href='/schedule'>
        <button

          className="mt-6 inline-block bg-blue-600 text-white font-medium px-8 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Book a Tour
        </button>
      </Link>

    </div>
  )
}

export default CalltoAction

