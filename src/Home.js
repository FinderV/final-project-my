import { useState, useEffect } from 'react'; 
import './App.css';
import { slides } from './slides';

function Home() {
    const [slide, setSlide] = useState(0);
    const {title, content, image} = slides[slide]

    useEffect(() => {
        const interval = setInterval(() => {
            setSlide((slide => {
                slide ++;
                if (slide > slides.length - 1) {
                    slide = 0;
                }
                return slide;
            }));        
        }, 3500); 

        return () => clearInterval(interval); 
    }, []);

    const previousSlide = () => {
        setSlide((slide => {
            slide --;
            if (slide < 0) {
                return slides.length - 1;
            }
            return slide;
        }))    
    }
   
    const nextSlide = () => {
        setSlide((slide => {
            slide ++;
            if (slide > slides.length - 1) {
                slide = 0;
            }
            return slide;
        }))        
    }

    return (
        <div>

        <section className="features">
        <div className="feature-card">
          <h3>🚚 Fast Delivery</h3>
          <p>Delivery across the city within 2 hours</p>
        </div>
        <div className="feature-card">
          <h3>🔒 Quality Guarantee</h3>
          <p>Official warranty on all products</p>
        </div>
        <div className="feature-card">
          <h3>💳 Convenient Payment</h3>
          <p>Installment plans and interest-free credit</p>
        </div>
      </section>

            <div className='container'>
                 <h2>{title}</h2>
            </div>
            
            <div className='container'>
                <img src={image} width="750px" alt="slide"/>  
            <div className='cont'>                    
            <h3>{content}</h3>
            </div>
            </div>

            <div className='container'>
                <button className='container change' onClick={previousSlide}>◀</button>                
                <button className='container change' onClick={nextSlide}>▶</button>           
            </div>               
        </div>
    )
}

export default Home;