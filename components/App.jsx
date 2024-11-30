import { useState } from 'react';
import IconShare from '../public/images/icon-share.svg?react';
import IconFacebook from '../public/images/icon-facebook.svg?react';
import IconTwitter from '../public/images/icon-twitter.svg?react';
import IconPinterest from '../public/images/icon-pinterest.svg?react';

export default function App({}) {
    const [active, isActive] = useState(false);
    return (
        <div className="mt-18 mb-20 mx-6 bg-white rounded-lg shadow-card max-w-card lg:flex">
            <div className="rounded-t-lg h-50 relative shrink-0 overflow-hidden lg:h-auto lg:w-2/5 lg:rounded-tr-none lg:rounded-bl-lg">
                <img src="./images/drawers.jpg" alt="drawers" className="absolute h-full w-full object-cover" />
            </div>
            <div className="px-8 pt-10 pb-5 relative lg:pb-8">                
                <h1 className="font-bold text-very-dark-grayish-blue mb-5 lg:text-xl">Shift the overall look and feel by adding these wonderful touches to furniture in your home</h1>
                <p className="text-sm font-medium text-desaturated-dark-blue mb-8 lg:mb-5">Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and uninviting. I’ve got some simple tips to help you make any room feel complete.</p>
                <div className="flex gap-4 items-center">
                    <img src="./images/avatar-michelle.jpg" alt="michelle" className="rounded-full h-10" />
                    <div className="text-sm font-medium grow text-grayish-blue">
                        <h2 className="font-bold text-very-dark-grayish-blue">Michelle Appleton</h2>
                        28 Jun 2020
                    </div>
                    <div className={`flex justify-center lg:is-active:relative group ${active?'is-active':''}`}>
                        <div className={`bg-very-dark-grayish-blue rounded-b-lg hidden py-5 px-8 gap-5 lg:px-9 lg:py-4 group-is-active:flex group-is-active:absolute group-is-active:right-0 group-is-active:left-0 group-is-active:bottom-0 lg:group-is-active:-top-7 lg:group-is-active:bottom-auto lg:group-is-active:left-auto lg:group-is-active:right-auto lg:group-is-active:-translate-y-full lg:group-is-active:rounded-lg lg:group-is-active:shadow-card border-very-dark-grayish-blue lg:group-is-active:arrow ${active?'is-active':''}`}>
                            <span className="uppercase font-medium text-sm text-grayish-blue hidden tracking-widest group-is-active:block">Share</span>
                            <div className="gap-4 flex-grow text-white hidden items-center group-is-active:flex">
                                <a href="#"><IconFacebook /></a>
                                <a href="#"><IconTwitter /></a>
                                <a href="#"><IconPinterest /></a>
                            </div>
                        </div>
                        <button onClick={() => isActive(!active)} aria-label="Share" className={`rounded-full h-8 w-8 bg-light-grayish-blue relative z-10 group-is-active:bg-grayish-blue group-is-active:-bottom-2 lg:group-is-active:bottom-auto lg:group-is-active:bg-desaturated-dark-blue`}>
                            <IconShare className="text-very-dark-grayish-blue mx-auto group-is-active:text-white" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}