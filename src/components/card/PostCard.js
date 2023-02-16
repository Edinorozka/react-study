import React from 'react';
import { Card, CardHeader, CardBody} from '@chakra-ui/react'

const PostCard = (props) => (
<Card style={{border: '1px solid black', borderRadius: 15, maxWidth: 550}}>
    <CardHeader><h2 style={{padding: "0px 10px", margin: 0, borderBottom: '1px solid black', textAlign: "center", fontSize: 24}}>{props.title}</h2></CardHeader>
    <CardBody style={{padding: "0px 10px"}}>
        <p>{props.email}</p>
        <p>{props.phone}</p>
        <p>{props.postTitle}</p>
        <p>{props.postBody}</p>
    </CardBody>
</Card>
);

export default PostCard;