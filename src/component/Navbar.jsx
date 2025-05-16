import Image from "next/image";
import githubLogo from "@/app/githubLogo.svg"

export default function Navbar() {
    return (
        <header className="absolute top-0 w-full text-white pt-5">
            <div className="max-w-5/6 m-auto flex gap-1 items-center">
                <Image
                    src={githubLogo}
                    width={30}
                    height={30}
                    alt="github logo"
                />
                <h4>GitHub Profile Viewer</h4>
            </div>
        </header>
    )
}