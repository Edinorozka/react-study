import React from 'react';

const PostCard = (props) => (
<div style={{border: '1px solid black', borderRadius: 15, maxWidth: 500}}>
    <h2 style={{padding: "0px 5px", margin: 0, borderBottom: '1px solid black', textAlign: "center", fontSize: 24}}>{props.title}</h2>
    <>
        <p style={{padding: "0px 10px"}}>{props.email}</p>
        <p style={{padding: "0px 10px"}}>{props.phone}</p>
        <p style={{padding: "0px 10px"}}>{props.postTitle}</p>
        <p style={{padding: "0px 10px"}}>{props.postBody}</p>
    </>
</div>
);

export default PostCard;