import React,{ useState, useEffect } from 'react';
import axios from 'axios';

import Post from './Post';
import Pagination from './Pagination';
import Loader from './Loader';
import './Home.scss';

const Home = () => {

    const [posts,setPosts] = useState([]);
    const [loading,setLoading] = useState(false);
    const [currentPage,setCurrentPage] = useState(1);
    const [postsPerPage,setPostsPerPage] = useState(4);
    const [search,setSearch] = useState('');

    useEffect(() => {
        setLoading(true)
        const fetched1 = () => {
            return axios.get(`https://reqres.in/api/users?page=1`)
        }
        const fetched2 = () => {
            return axios.get(`https://reqres.in/api/users?page=2`)
        }
        Promise.all([fetched1(),fetched2()])
            .then((res) => {
                const p1 = res[0];
                const p2 = res[1];
                setPosts(p1.data.data.concat(p2.data.data))
                setLoading(false)
            })
    },[])

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost,indexOfLastPost)

    // Change page
    const paginate = (pageNumber) => {
        console.log(pageNumber)
        setCurrentPage(pageNumber)
    };

    const handleSearch = (e) => {
        setSearch(e.target.value);
    }

    return (
        <div>
            <div className="search">
                <input type="text" value={search} onChange={(e) => handleSearch(e)} placeholder="search Here" />
            </div>
            <Post postData={currentPosts} loading={loading} search={search} />
            <Pagination
                postsPerPage={postsPerPage}
                totalPosts={posts.length}
                paginate={paginate}
                currentPage={currentPage}
            />
        </div>
    );
}
 
export default Home;