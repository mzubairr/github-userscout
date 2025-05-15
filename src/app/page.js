import Navbar from "@/component/Navbar";

export default function Home() {
  return (
    <>
      <div className="bg-img">
        <div className="max-w-5/6 m-auto px-2 flex flex-col justify-around min-h-[100vh]">
          <Navbar />
          <main className="text-white min-h-[90vh] flex items-center">
            <section id="user-section">
              <div>
                <h1 className="text-4xl font-bold w-[40%]">A simpler way to explore your GitHub profile and repositories.</h1>
                <form className="flex gap-2 mt-7">
                  <input className="bg-[#4E5E7E] rounded-[4px] p-1.5 w-[25%]" type="text" name="username" id="username" placeholder="Enter a github username..." />
                  <input className="bg-[#00C4F5] cursor-pointer rounded-[4px] py-1 px-4" type="submit" value="View" />
                </form>
              </div>
              <div className="mt-8">
                Amazing developers
                <div className="flex items-center gap-3 mt-2">
                  <button className="bg-[#4E5E7E] text-gray-300 rounded-[6px] py-0.5 px-1 cursor-pointer">mzubairr</button>
                  <button className="bg-[#4E5E7E] text-gray-300 rounded-[6px] py-0.5 px-1 cursor-pointer">mabdullahjs</button>
                  <button className="bg-[#4E5E7E] text-gray-300 rounded-[6px] py-0.5 px-1 cursor-pointer">shehza-d</button>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </>
  );
}
