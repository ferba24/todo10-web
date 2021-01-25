import Link from "next/link"

const Input = props => {
  
  return (
    <div className="relative flex items-center max-w-xs bg-white bg-opacity-40 py-1 px-3 rounded-xl">
      <input
        className="flex-1 w-11/12 text-white bg-transparent appearance-none focus:outline-none"
        {...props}
      />
      <img
        src="icons/arrow-right-white.svg"
        className="ml-2"
      />
    </div>
  )
}

export default function Newsletter() {

  return (
    <div>
      <img
        className="mb-3"
        src="/images/logo-white.svg"
        alt="Todo 10"
      />
      <Input
        placeholder="Enter your email"
      />
      <div className="text-xs opacity-60 pl-2 mt-2">
        Receive news and marketing
      </div>
      <div className="mt-3 flex space-x-3">
        <Link prefetch={false} href="">
          <a>
            <img src="/icons/facebook.svg"/>
          </a>
        </Link>
        <Link prefetch={false} href="https://www.linkedin.com/company/todo10/">
          <a target="_blank">
            <img src="/icons/linkedin.svg"/>
          </a>
        </Link>
      </div>
    </div>
  )
}