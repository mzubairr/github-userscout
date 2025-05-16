import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Image from 'next/image';
import { Separator } from "@/components/ui/separator"
import githubLogo from "@/app/githubLogo.svg"

export default function Cards({ data }) {
    return (
        <Card className="w-[380px] pt-0 overflow-hidden">
            <CardHeader className="bg-card-img p-5">
                <div className='flex gap-3 items-center'>
                    <Image
                        className='rounded'
                        src={data?.avatar_url || "/fallback-image.png"}
                        width={70}
                        height={70}
                        alt={data.name || "GitHub user avatar"}
                    />
                    <div>
                        <CardTitle className="text-white">{data.name}</CardTitle>
                        <CardDescription>
                            <div className="flex items-center gap-1 mt-2 text-white">
                                <Image
                                    className="bg-black rounded-4xl"
                                    src={githubLogo}
                                    width={20}
                                    height={20}
                                    alt="github logo"
                                />
                                <a target="_blank" href={data?.html_url}>
                                    {data.login}
                                </a>
                            </div>
                        </CardDescription>
                    </div>
                </div>
            </CardHeader>

            <CardContent>
                <div>
                    <p className='py-2'>{data?.bio}</p>
                    <Separator />
                    <p className='py-2'><span className="font-bold mr-5">Location</span> {data?.location || 'not found'}</p>
                    <Separator />
                    <p className='py-2'><span className="font-bold mr-5">Company</span> {data?.company || 'not found'}</p>
                    <Separator />
                    <p className='py-2'><span className="font-bold mr-5">Follower</span> {data?.followers || 'not found'}</p>
                    <Separator />
                    <p className='py-2'><span className="font-bold mr-5">Following</span> {data?.following || 'not found'}</p>
                    <Separator />
                    <p className='py-2'><span className="font-bold mr-5">Repos</span> {data?.public_repos || 'not found'}</p>
                    <Separator />
                    <p className='py-2'><span className="font-bold mr-5">Twitter</span> @{data?.twitter_username || 'not found'}</p>
                    <Separator />
                    <p className='py-2'><span className="font-bold mr-5">Website</span><a target="_blank" href={data?.blog}>{data?.blog || 'not found'}</a></p>
                </div>
            </CardContent>

            <CardFooter>
                <p>GitHub member since {data.created_at?.slice(0, 4) || ""}</p>
            </CardFooter>
        </Card>
    )
}