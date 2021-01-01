import PostPreview from '../components/post-preview';
import { useState } from "react";
import Image from 'next/image';
import {CheckCircle} from "react-feather"

export default function MoreStories({ posts }) {
    const [currentCategory, setCategory] = useState('all');

    const categories = [];
    posts.forEach(post => categories.push(post.category)
);

    const getUniqueElementsFromArray = arr => {
        return [...new Set(arr)];
    };

    const uniqueCategories = getUniqueElementsFromArray(categories)

    const counts = {};
    posts.forEach(post => {
        let category = post.category;
        counts[category] = counts[category] ? counts[category] + 1 : 1;
    });

    return (
        <>
            <section className="">
                <h2 className="mb-8 text-primary text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
                    Categories
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
                    {uniqueCategories && uniqueCategories.map((category, index) => (
                        <div key={index}>
                            <Image 
                                src="/assets/category/category.webp"  
                                layout='responsive'
                                width="510"
                                height="510" 
                                alt="Programming" 
                                className="w-full object-cover object-center rounded-lg shadow-lg" 
                            />    
                            <div className="relative px-4 -mt-16">
                                <div className="bg-secondary p-6 rounded-lg cursor-pointer shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110" onClick={() => setCategory(currentCategory === category ? 'all' : category)}>
                                    <h4 className={`mt-1 text-xl ${currentCategory === category ? "text-accent" : "text-primary"} font-semibold uppercase leading-tight truncate`}>
                                        {category}
                                    </h4>
                                    <div className="mt-4">
                                        <span className="text-secondary text-md font-semibold">#{counts[category]} </span>
                                        <span className="text-sm text-secondary">(number of articles)</span>
                                    </div> 
                                    {currentCategory === category ? <div className="text-accent absolute top-8 right-7"><CheckCircle /></div> : ''}
                                </div>
                            </div>
                        </div> 
                    ))}
                </div>
            </section>
            <section>
                <h2 className="mb-8 text-primary text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
                    More Stories
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
                    {posts.map((post) => (
                    currentCategory === post.category || currentCategory === 'all' ? 
                    <PostPreview
                        key={post.slug}
                        title={post.title}
                        coverImage={post.coverImage}
                        date={post.date}
                        author={post.author}
                        slug={post.slug}
                        excerpt={post.excerpt}
                    /> :
                    ''
                    ))}
                </div>
            </section>
        </>
    )
}
