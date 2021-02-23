import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";
import image from "../cover01.png";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";
import About from "./About.js";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
    return builder.image(source)
}

export default function Home() {

    const [projectData, setProjectData] = useState(null);

    useEffect(() => {
        sanityClient.fetch(`*[_type == "project"]{
            title,
            date,
            place,
            description,
            projectType,
            link,
            tags
        }`).then((data) => setProjectData(data)).catch(console.error);
    }, []);

    const [author, setAuthor] = useState(null);

    useEffect(() => {
        sanityClient.fetch(`*[_type == "author"]{
            name,
            bio,
            "authorImage": image.asset->url
        }`).then((data) => setAuthor(data[0]))
            .catch(console.error);
    }, []);

    if (!author) return <div>Loading........</div>

    return (
        <main>
            <img
                src={image}
                alt="Cover BG"
                className="absolute object-cover w-full h-full"
            />
            <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
                <h1 className="text-6xl text-green-100 font-bolt cursive leading-none lg:leading-snug home-name">
                    Hi,I'm Brian Fernando
                    </h1>
            </section>

            <div className="pl-12 pr-12 pt-5 pb-5 bg-gray-200">
                <section className="grid grid-cols-4 gap-8 justify-center">
                    {projectData && projectData.map((project, index) => (
                        <article className="relative rounded-lg shadow-xl bg-white p-5 hover:bg-gray-600">
                            <h3 className="text-gray-800 text-3xl font-bold mb-2 hover:text-white">
                                <a
                                    alt={project.title}
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    {project.title}
                                </a>
                            </h3>
                            <div className="text-gray-500 text-xs space-x-4 hover:text-white">
                                <p className="my-6 text-lg text-gray-700 leading-relaxed ">
                                    {project.description}
                                </p>
                            </div>
                        </article>
                    ))}
                </section>
            </div>


            <div className="p-10 lg:pt-10 container mx-auto relative bg-gray-200">
                <section className=" bg-gray-800 rounded-lg shadow-2xl lg:flex p-20">
                    <img
                        src={urlFor(author.authorImage).url()}
                        className="rounded w-32 h-32 lg:w-64 lg:h-64 mr-8"
                        alt={author.name}
                    />
                    <div className="text-lg flex flex-col justify-center">
                        <h1 className="cursive text-6xl text-blue-200 mb-4">
                            Hey there, I'm{" "}
                            <span className="text-blue-200">
                                {author.name}
                            </span>
                        </h1>
                        <div className="prose lg:prose-xl text-white">
                            <BlockContent
                                blocks={author.bio}
                                projectId="fh6n8dxd"
                                dataset="production"
                            />
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                            <a href="/about/">
                                <button className="bg-white p-3 hover:bg-gray-600 hover:text-white">
                                    More Info
                                </button>
                            </a>
                        </div>

                    </div>
                </section>
            </div>

        </main>

    )
}