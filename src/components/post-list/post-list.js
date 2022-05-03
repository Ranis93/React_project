import React from "react";
import { ListGroup } from 'reactstrap';
import PostListItem from "../post-list-item";

import './post-list.css';

const PostList = ({ posts }) => {

    const elements = posts.map((item) => {
        return (
            <li key={item.id} className="list-group-item">
                <PostListItem {...item} />
            </li>
        )
    })

    return (
        <ListGroup className="app-list">
            {elements}
        </ListGroup>
    )
}

export default PostList;