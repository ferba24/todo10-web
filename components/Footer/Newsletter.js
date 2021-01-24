import Link from "next/link"

const Input = props => {
  
  return (
    <input
      className="px-3 max-w-full py-1 rounded-xl bg-white bg-opacity-40 text-white appearance-none focus:outline-none"
      {...props}
    />
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
      <div className="text-xs opacity-60 pl-2 mt-1">
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