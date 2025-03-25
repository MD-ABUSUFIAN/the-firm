import React from 'react';

const Button = ({content,style}) => {
    return (
        <div>
            <button className={`${style} py-[10px] px-[20px] text-[18px] font-bold rounded cursor-pointer transition-all`}>{content|| "Missing"}</button>
        </div>
    );
};

export default Button;