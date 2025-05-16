'use client'

import Image from "next/image";
import githubLogo from "@/app/githubLogo.svg"
import { usePathname } from "next/navigation";
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useRef } from "react";
import { useRouter } from 'next/navigation'


export default function Navbar() {
    const pathname = usePathname();
    const isHome = pathname === "/";
    const user = useRef()
    const router = useRouter()

    const formHandler = (e) => {
        e.preventDefault();
        router.push(`/profile/${user.current.value}`)
    }

    return (
        <header className={`absolute top-0 w-full text-white py-1 sm:py-2 ${!isHome ? "bg-black" : ""}`}>
            <div className="max-w-5/6 m-auto flex gap-y-2 flex-wrap sm:flex-nowrap justify-between items-center">
                {!isHome ?
                    <Link href="/" className="sm:flex items-center hidden">
                        <Image
                            src={githubLogo}
                            width={30}
                            height={30}
                            alt="github logo"
                        />
                        <h4>GitHub Profile Viewer</h4>
                    </Link>
                    :
                    <div className="flex items-center">
                        <Image
                            src={githubLogo}
                            width={30}
                            height={30}
                            alt="github logo"
                        />
                        <h4>GitHub Profile Viewer</h4>
                    </div>
                }
                {!isHome ?
                    <form onSubmit={formHandler} className="m-auto sm:m-0 py-1 sm:py-0">
                        <div className="flex w-full max-w-sm items-center space-x-2">
                            <Input id="username" ref={user} className="bg-[#4E5E7E] placeholder:text-white" type="text" placeholder="Enter a github username..." />
                            <Button className="bg-[#00C4F5] cursor-pointer" type="submit">View</Button>
                        </div>
                    </form>
                    :
                    ""
                }
            </div>
        </header>
    )
}