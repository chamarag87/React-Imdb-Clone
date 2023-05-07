import React, {useState, useEffect} from 'react';
import ReactPlayer from 'react-player'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import Table from 'react-bootstrap/Table';

import data from '../Data/data.json'
import single from '../Data/data.json'

import { getMovies } from '../Services/request';
import { StarFill, Star, BookmarkPlus, Film, Images, BinocularsFill, Activity } from 'react-bootstrap-icons';


const Home = () => {

    const [list, setList] = useState();
    const [page, setPage] = useState(1);
    const [movie, setMovie] = useState(single)

    const getData = async () => {
        const res = await getMovies();
        // setList(res.data);
        setList(data)
    }

    useEffect(() => {
        getData();
    }, []);

    const nextPage = (id) => {
        console.log(id)
        setPage(2)
    }

    return (
        <Container>
            {/* <Row>
                <Col sm={8} className='mt-1'>
                    <Carousel>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src="https://www.stattogories.com/build/images/meta/share-banner-imdb-movies.jpg?v=3"
                            alt="Second slide"
                            />

                            <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Col>
                <Col sm={4} className='mt-1'>
                    <Row style={{backgroundColor:'#212529', padding:'15'}}>
                        <Col sm={12}>
                            <Row>
                                <Col sm={6}>
                                    <Image style={{width:100}} src="https://cdn.shopify.com/s/files/1/0057/3728/3618/products/108b520c55e3c9760f77a06110d6a73b_240x360_crop_center.progressive.jpg?v=1573652543" />
                                </Col>
                                <Col sm={6}>
                                    <p>The "Queen Charlotte: A Bridgerton Story" Cast Tell All Watch Them Spill the Tea</p>
                                </Col>
                            </Row>
                            <Row className='mt-1'>
                                <Col sm={6}>
                                    <Image style={{width:100}} src="https://cdn.shopify.com/s/files/1/0057/3728/3618/products/108b520c55e3c9760f77a06110d6a73b_240x360_crop_center.progressive.jpg?v=1573652543" />
                                </Col>
                                <Col sm={6}>
                                    <p>The "Queen Charlotte: A Bridgerton Story" Cast Tell All Watch Them Spill the Tea</p>
                                </Col>
                            </Row>
                            <Row className='mt-1'>
                                <Col sm={6}>
                                    <Image style={{width:100}} src="https://cdn.shopify.com/s/files/1/0057/3728/3618/products/108b520c55e3c9760f77a06110d6a73b_240x360_crop_center.progressive.jpg?v=1573652543" />
                                </Col>
                                <Col sm={6}>
                                    <p>The "Queen Charlotte: A Bridgerton Story" Cast Tell All Watch Them Spill the Tea</p>
                                </Col>
                            </Row>
                        </Col>
                        <Col></Col>
                        <Col></Col>
                    </Row>
                </Col>
            </Row> */}
            {page == '1' &&
                <Row className="justify-content-md-center">
                    <Col xs={12} md={12} lg={2}></Col>
                    <Col xs={12} md={12} lg={8} className='bg-light'>
                        <Row>
                            <Col xs={9} md={9} lg={9}>
                                <h6 className='mt-4'>IMDb Charts</h6>
                                <h4>IMDb Top 250 Movies</h4>
                                <span>IMDb Top 250 as rated by regular IMDb voters.</span>
                                <hr />
                                <span>Showing 250 Titles</span>

                                <Table responsive="sm" striped>
                                    <thead>
                                        <tr>
                                            <th>Rank & Title</th>
                                            <th>IMDb Rating</th>
                                            <th>Your Rating</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {list?.map((item) =>
                                            <tr>
                                                <td>
                                                    <Image style={{width:50, marginRight:15}} src={item.image} />
                                                    {' '}{' '}{item.rank} <a href="#" onClick={ () => nextPage(item.id)}>{item.title}</a>
                                                </td>
                                                <td><StarFill className='text-warning' /> {item.rating}</td>
                                                <td><Star /></td>
                                                <td><BookmarkPlus /></td>
                                            </tr>
                                        )}

                                    </tbody>
                                </Table>
                            </Col>
                            <Col xs={3} md={3} lg={3} style={{borderLeftStyle: 'solid', borderLeftColor: '#999999'}}>
                                <h4 className='mt-5'>You Have Seen</h4>
                                <h5>0/250 (0%)</h5>
                                <hr />
                                <h5>IMDb Charts</h5>
                                <ul className="navbar-nav">
                                    <li className="text-primary">Box Office</li>
                                    <li className="text-primary">Most Popular Movies</li>
                                    <li className="text-primary">Top 25 Movies</li>
                                    <li className="text-primary">Top Rated English Movies</li>
                                    <li className="text-primary">Most Popular TV Shows</li>
                                    <li className="text-primary">Top 250 TV Shows</li>
                                    <li className="text-primary">Top Rated Indian Movies</li>
                                    <li className="text-primary">Lowest Rated Movies</li>
                                </ul>
                                <hr />
                                <h5>Top Rated Movies by Genre</h5>
                                <ul className="navbar-nav">
                                    <li className="text-primary">Action</li>
                                    <li className="text-primary">Adventure</li>
                                    <li className="text-primary">Animation</li>
                                    <li className="text-primary">Biography</li>
                                    <li className="text-primary">Comedy</li>
                                    <li className="text-primary">Crime</li>
                                    <li className="text-primary">Drama</li>
                                    <li className="text-primary">Family</li>
                                    <li className="text-primary">Fantasy</li>
                                    <li className="text-primary">Film-Noir</li>
                                    <li className="text-primary">History</li>
                                    <li className="text-primary">Horror</li>
                                    <li className="text-primary">Music</li>
                                    <li className="text-primary">Musical</li>
                                    <li className="text-primary">Mystery</li>
                                    <li className="text-primary">Romance</li>
                                    <li className="text-primary">Sci-Fi</li>
                                    <li className="text-primary">Sport</li>
                                    <li className="text-primary">Western</li>
                                </ul>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={12} md={12} lg={2}></Col>
                </Row>
            }

            {page == '2' &&
                <>
                    <Row className="justify-content-md-center mt-3 bg-dark">
                        <Col xs={12} md={12} lg={7} className='bg-dark'>
                            <h2 className='text-white mt-5'>The Shawshank Redemption</h2>
                            <span className='text-light'>1994 15 2h 22m</span>
                        </Col>
                        <Col xs={12} md={12} lg={5} className='bg-dark'>
                            <h6 className='text-white mt-3'>Cast & crew User reviews Trivia | IMDbPro | <BinocularsFill /> All topics</h6>
                            <Row className='mt-4'>
                                <Col xs={4} md={4} lg={4}>
                                    <h6 className='text-white'>IMDb RATING</h6>
                                    <h5><StarFill className='text-warning' /> <b className='text-white'>9.3</b> <span className='text-secondary'>/10</span></h5>
                                    <span className='text-secondary' style={{marginLeft:20, marginTop:10}}>2.9M</span>
                                </Col>
                                <Col xs={4} md={4} lg={4}>
                                    <h6 className='text-white'>YOUR RATING</h6>
                                    <h5><Star className='text-primary' /> <b className='text-white'>Rate</b></h5>
                                </Col>
                                <Col xs={4} md={4} lg={4}>
                                    <h6 className='text-white'>POPULARITY</h6>
                                    <h5><Activity className='text-danger' /> <b className='text-white'>Rate</b></h5>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row className="justify-content-md-center">
                        <Col xs={12} md={12} lg={3} className='bg-dark'>
                            <Image src="https://cdn.shopify.com/s/files/1/0057/3728/3618/products/108b520c55e3c9760f77a06110d6a73b_240x360_crop_center.progressive.jpg?v=1573652543" />
                        </Col>
                        <Col xs={12} md={12} lg={7} className='bg-dark'>
                            <ReactPlayer url='https://www.youtube.com/embed/Z5jvQwwHQNY' />
                        </Col>
                        <Col xs={12} md={12} lg={2} className='bg-dark'>
                            <Row>
                                <Col xs={12} md={12} lg={12} style={{paddingTop:70}}>
                                    <center><Film className='text-white' /> <br /><span className='text-white'>5 Videos</span></center>
                                </Col>
                                <Col xs={12} md={12} lg={12} style={{paddingTop:100}}>
                                    <center><Images className='text-white' /> <br /><span className='text-white'>5 Videos</span></center>
                                </Col>
                            </Row>
                        </Col>
                    </Row>

                    <Row className="justify-content-md-center mb-3">
                        <Col xs={12} md={12} lg={12} className='bg-dark'>
                            <button type="button" class="btn btn-outline-light mt-3 mb-1">Drama</button>
                            <p className='text-white'>Over the course of several years, two convicts form a friendship, seeking consolation and, eventually, redemption through basic compassion.</p>
                            <hr/>
                            <p className='text-white'><b>Director</b> <a href="#">Frank Darabont</a></p>
                            <hr />
                            <p className='text-white'><b>Writers</b> <a href="#">Stephen King</a>: <a href="#">Frank Darabont</a></p>
                            <hr />
                            <p className='text-white'><b>Stars</b> <a href="#">Tim Robbins</a>: <a href="#">Bob Gunton</a></p>
                        </Col>
                    </Row>
                </>
            }

        </Container>
    );
}

export default Home;