import React, { useEffect, useState } from 'react'
import { AllPost, allPostData } from '../../Data/datas'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import './Todos.css'





export default function Todos() {

    const [posts, setPosts] = useState(allPostData)
    const [currentPage, setCurrentPage] = useState(1)
    const [paginatedPosts, setPaginatedPosts] = useState([])



    //! pageSize ==> count of box in one page
    //! array.from()==> مقادیرش رو خودس مقدار دهی میکنه
    let pageSize = 5;
    let pageNumbers;

    useEffect(() => {
        //! slice data to show that
        let endIndex = pageSize * currentPage
        let startIndex = endIndex - pageSize
        let allShowPosts = posts.slice(startIndex, endIndex)
        setPaginatedPosts(allShowPosts)
    }, [currentPage])


    const pagesCount = Math.ceil(posts.length / pageSize)
    pageNumbers = Array.from(Array(pagesCount).keys())

    //! change current page and show another data
    const changeCurrentPage = (newPage) => {
        setCurrentPage(newPage)

        //! slice data to show that
        let endIndex = pageSize * currentPage
        let startIndex = endIndex - pageSize
        let allShowPosts = posts.slice(startIndex, endIndex)
        setPaginatedPosts(allShowPosts)
    }


    return (
        <div className='todos'>
            <div className='boxTodos'>
                {paginatedPosts && paginatedPosts.map(post => (
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={post.image} className='card-img' />
                        <Card.Body>
                            <Card.Title className='txt_me'>{post.title}</Card.Title>
                            <Card.Text >
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">buy  {post.price}$</Button>
                        </Card.Body>
                    </Card>
                ))}

            </div>

            <nav aria-label="..." className='nav__pagination'>
                <ul class="pagination">
                    {
                        pageNumbers.map(pageNumber => (
                            <li className={pageNumber + 1 === currentPage ? 'page-item active' : 'page-item'}>
                                <a
                                    class="page-link"
                                    onClick={() => changeCurrentPage(pageNumber + 1)}
                                >{pageNumber + 1}</a>
                            </li>
                        ))
                    }

                </ul>
            </nav>
        </div>

    )
}
