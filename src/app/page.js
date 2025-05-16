import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Home() {
  return (
    <>
      <div className="bg-img">
        <div className="max-w-5/6 m-auto px-2 flex flex-col justify-around min-h-[100vh]">
          <main className="text-white min-h-[90vh] flex items-center">
            <section id="user-section">
              <div>
                <h1 className="text-4xl font-bold w-[40%]">A simpler way to explore your GitHub profile and repositories.</h1>
                <form className="mt-7">
                  <div className="flex w-full max-w-sm items-center space-x-2">
                    <Input id="username" className="bg-[#4E5E7E] placeholder:text-white" type="text" placeholder="Enter a github username..." />
                    <Button className="bg-[#00C4F5] cursor-pointer" type="submit">View</Button>
                  </div>
                </form>
              </div>
              <div className="mt-8">
                Amazing developers
                <div className="flex items-center gap-3 mt-2">
                  <Button className="bg-[#4E5E7E] cursor-pointer">mzubairr</Button>
                  <Button className="bg-[#4E5E7E] cursor-pointer">mabdullahjs</Button>
                  <Button className="bg-[#4E5E7E] cursor-pointer">shehza-d</Button>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </>
  );
}
