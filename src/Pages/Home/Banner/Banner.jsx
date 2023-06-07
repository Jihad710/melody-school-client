import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import img1 from '../../../assets/Banner/1.jpg';


const Banner = () => {
    return (
        <Carousel>
      <div>
          <img src={img1}/>
          <div className="absolute h-full flex items-center left-0 bottom-10 ">
            <div className='text-white space-y-7 pl-20'>
                <h2 className='text-6xl  font-normallight'>Music For Everyone</h2>
                <div>
               
                <button className="btn btn-outline btn-warning">Start Learning</button>
                </div>
            </div>
          </div>
          
        </div> 
      <div className="carousel-item relative">
          <img src={img1}/>
          <div className="absolute h-full flex items-center left-0 bottom-10 ">
            <div className='text-white space-y-7 pl-20'>
                <h2 className='text-6xl  font-normallight'>Music For Everyone</h2>
                <div>
               
                <button className="btn btn-outline btn-warning">Start Learning</button>
                </div>
            </div>
          </div>
          
        </div> 
      <div className="carousel-item relative">
          <img src={img1}/>
          <div className="absolute h-full flex items-center left-0 bottom-10 ">
            <div className='text-white space-y-7 pl-20'>
                <h2 className='text-6xl  font-normallight'>Music For Everyone</h2>
                <div>
               
                <button className="btn btn-outline btn-warning">Start Learning</button>
                </div>
            </div>
          </div>
          
        </div> 
      
            
        </Carousel>
    );
};

export default Banner;
