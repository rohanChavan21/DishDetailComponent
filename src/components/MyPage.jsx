import React from "react";


const MyPage = (props) => {
    return <div className={props.index%2===0?'red':'white'}>{props.data} is a superhero</div>;
}

export {MyPage};