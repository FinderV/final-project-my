function Team() {
    return (
     <div className="container">
        <div>
        <div className="feature-card" >
          <h2>TechStore - Leader in the World of Technology</h2>
          <div className="feature-card">
              <p>
            We are a leading electronics retailer with over 10 years of experience 
            in the market. Our mission is to make cutting-edge technologies accessible 
            to everyone.
          </p>
          <p>
            Our assortment includes only verified brands and high-quality products 
            with official manufacturer warranty.
          </p>
          <p>
            We take pride in our excellent service, fast delivery, and professional 
            customer support.
          </p>
          </div>
        
        </div>
        <div className="feature-card">
          <div className="image-container">
            <img 
              src="https://plus.unsplash.com/premium_photo-1661756423422-4486e27eb6dd?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="Our Team" 
              className="team-image"
            />
            <h3 style={{ marginTop: '25px' }}>Our Team</h3>
          </div>
        </div>
      </div>
    </div>
    )
}

export default Team;