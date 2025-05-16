import Cards from "@/component/Card";

export default async function Page({ params }) {
    const { userid } = await params
    let githubUser = await fetch(`https://api.github.com/users/${userid}`);
    const data = await githubUser.json();

    return (
        <>
            <main className="flex justify-center items-center min-h-screen pt-20 px-3 pb-5">
                <Cards data={data} />
            </main>

        </>
    )
}
