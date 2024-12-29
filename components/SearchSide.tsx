import { Heart, Search, ShoppingCart, User } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

interface SearchSideProps { }

const SearchSide: React.FC<SearchSideProps> = () => {
    return (
        <div className='flex items-center gap-[24px]'>
            <label htmlFor="search" className="bg-[#F5F5F5] pr-[12px] pl-[20px] gap-[37px] py-[10px] rounded-md max-w-[280px] flex">
                <input
                    type="text"
                    id="search"
                    name="search"
                    placeholder="what are you looking for?"
                    className="outline-none max-w-[240px] bg-[#F5F5F5]"
                />
                <button><Search /></button>
            </label>
            <div className="flex items-center justify-center gap-4">
                <Link href="#">
                    <Heart/>
                </Link>
                <Link href="#">
                    <ShoppingCart />
                </Link>
                <Link href="#">
                    <User/>
                </Link>
            </div>
        </div>
    );
};

export default SearchSide;
