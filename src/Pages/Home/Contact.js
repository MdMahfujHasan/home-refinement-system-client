import React from "react";
import kitchen from '../../assets/images/kitchen.png';
import PrimaryButton from "../Shared/PrimaryButton";

const Contact = () => {
    return (
        <div style={{
            border: '5px solid pink',
            background: `url(${kitchen})`, backgroundSize: '120%'
        }} className='bg-primary px-10 py-14 '>
            <div className='text-center pb-14 text-white'>
                <p className='text-xl font-bold text-primary'>
                    Contact Us
                </p>
                <h1 className='text-3xl'>Stay connected with us</h1>
            </div>
            <div className='grid grid-cols-1 justify-items-center gap-5'>
                <input
                    type='text'
                    placeholder='Email Address'
                    className='input w-full max-w-md'
                />
                <input
                    type='text'
                    placeholder='Subject'
                    className='input w-full max-w-md'
                />
                <textarea
                    className='textarea w-full max-w-md'
                    placeholder='Your message'
                    rows={6}
                ></textarea>
                <PrimaryButton>Submit</PrimaryButton>
            </div>
        </div>
    );
};

export default Contact;