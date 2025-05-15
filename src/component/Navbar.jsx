import Image from "next/image";
import githubLogo from "@/app/githubLogo.svg"

export default function Navbar() {
    return (
        <header className="text-white pt-5">
            <div className="flex gap-1 items-center">
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