import Link from "next/link";

function Header() {
  return (
    <header className="flex justify-between p-5 max-w-7xl mx-auto">
      <div className="flex items-center space-x-5">
        <Link href="/">
          <img
            className="w-44 object-contain cursor-pointer"
            src="https://i.imgur.com/AUuCnnA.png"
            alt=""
          />
        </Link>
        {/*<div className="hidden md:inline-flex items-center space-x-5">*/}
        {/*  <h3>New</h3>*/}
        {/*  <h3>Functions</h3>*/}
        {/*  <h3 className="text-white bg-green-600 px-4 py-1 rounded-full">*/}
        {/*    Coming Soon*/}
        {/*  </h3>*/}
        {/*</div>*/}
      </div>

      <div className="flex items-center space-x-5 text-black cursor-pointer">
          <Link href="https://bloggify.sanity.studio/desk">
         <h3>Studio</h3>
          </Link>
          <Link href="https://jusoft.dev" >
              <h3>JuSoft</h3>
          </Link>

        <Link href="https://github.com/jusoftdev/bloggify">
        <h3 className="border px-4 py-1 rounded-full border-black">
          Github
        </h3>
        </Link>
      </div>
    </header>
  );
}

export default Header;
