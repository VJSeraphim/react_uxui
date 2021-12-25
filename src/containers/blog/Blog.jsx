import React from 'react'
import './blog.css'
import { Article } from '../../components'
import { blog01, blog02, blog03, blog04, blog05 } from './imports'

const Blog = () => {
    return (
        <div className="gpt3__blog section__padding" id="blog">
            <div className="gpt3__blog-heading">
                <h1 className="gradient__text">
                    A lot of parody videos are in progress. We will show some of the masterpieces...
                </h1>
            </div>
            <div className="gpt3__blog-container">
                <div className="gpt3__blog-container_groupA">
                    <Article imgUrl={blog01} date="Oct 12, 2015" title="Beginning of the Legend"/>
                </div>
                <div className="gpt3__blog-container_groupB">
                    <Article imgUrl={blog02} date="Dec 18, 2020" title="Moving Man"/> 
                    <Article imgUrl={blog03} date="Dex 29, 2020" title="MoongTangYee World"/>
                    <Article imgUrl={blog04} date="Oct 2, 2015" title="Just One More Match"/>
                    <Article imgUrl={blog05} date="Oct 31, 2018" title="I!!! DID!!! FIREBALL!!!"/>
                </div>
            </div>
        </div>
    )
}

export default Blog
