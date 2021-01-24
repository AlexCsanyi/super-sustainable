import PostPreview from '../components/post-preview';
import { useState } from "react";
import Image from 'next/image';
import {ChevronDown, ChevronUp } from "react-feather";
import { Transition } from '@headlessui/react';

export default function MoreStories({ posts }) {
    const [currentCategory, setCategory] = useState('all');
    const [isOpen, setIsOpen]            = useState(false)

    let categories = [];
    posts.forEach(post => categories.push(post.category));

    const getUniqueElementsFromArray = arr => {
        return [...new Set(arr)];
    };

    let uniqueCategories = getUniqueElementsFromArray(categories)

    let counts = {};
    posts.forEach(post => {
        let category = post.category;
        counts[category] = counts[category] ? counts[category] + 1 : 1;
    });

    return (
        <>
            <section>
                <div className="flex justify-between align-middle">
                    <h2 className="mb-8 text-primary text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
                        More Stories
                    </h2>

                    
                    <div className="relative inline-block text-left mt-8">
                        <div>
                            <button onClick={() => setIsOpen(!isOpen)} type="button" className="inline-flex justify-center w-56 rounded-md border border-accent shadow-sm px-4 py-2 bg-primary text-sm font-medium text-primary hover:bg-secondary focus:outline-none" id="categories-menu" aria-haspopup="true" aria-expanded="true">
                                Categories {isOpen ? <ChevronUp /> : <ChevronDown />}
                            </button>
                        </div>
                        <Transition
                            show={isOpen}
                            enter="transition ease-out duration-100 transform"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="transition ease-in duration-75 transform"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >   
                            {(ref) => (
                            <div ref={ref} className="z-10 origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-secondary ring-1 ring-black ring-opacity-5">
                                <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                    <ul className=" list-none m-0 p-0 ">
                                        <li className={`block cursor-pointer px-4 py-2 text-sm ${currentCategory === 'all' ? "text-accent" : "text-primary"} hover:bg-negative hover:text-inverse`} onClick={() => setCategory('all')} role="menuitem">
                                            #{posts.length} - All
                                        </li>
                                    {uniqueCategories && uniqueCategories.map((category, index) => (
                                        <li key={index} className={`block cursor-pointer px-4 py-2 text-sm ${currentCategory === category ? "text-accent" : "text-primary"} hover:bg-negative hover:text-inverse`} onClick={() => setCategory(currentCategory === category ? 'all' : category)} role="menuitem">
                                            #{counts[category]} - {category}
                                        </li>
                                    ))}
                                    </ul>
                                </div>
                            </div>
                            )}
                        </Transition>
                    </div>
                </div>
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
