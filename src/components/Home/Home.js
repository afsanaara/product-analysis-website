import React from 'react';

const Home = () => {
    const [reviews, setReviews] = useReview();
    // useEffect(() => {
    //     fetch('reviews.json')
    //         .then(response => response.json())
    //     .then(data=>setReviews(data))
    // },[])
    return (
        <div className="main-container">
            <div className="banner-container">
                <div className="banner-img">
                    <img style={{width: '600px'}} src="https://cdn.about.puma.com/-/media/images/newsroom/brand-product-news/2022/03-30-2022-slipstream-sashiko/m18_2.png?as=1&h=600&iar=1&w=800&rev=a2e2b12fb3cb4b099606d33fee70b5b8&hash=F1154C8666373F539EBF9F2C0F34FCA0" alt="" />
                </div>
                <div className="banner-text">
                    <h1>Join the movement</h1>
                    <p>Level up your running game. <br />
                        Achieve your goals with PUMA</p>
                    <br />
                    <button className="explore-btn">Explore only see great</button>
                </div>
               
            </div>
            
            <div className="review-section">
                <div>
                    <CustomerReview></CustomerReview>
                </div>
                
                <div>
                    <Link to="/reviews">
                         <button>See all reviews</button>
                   </Link> 
                </div>
                  
                
            </div>
            
        </div>
    );
};

export default Home;