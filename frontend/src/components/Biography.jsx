import React from "react";

const Biography = ({ imageUrl }) => {
  return (
    <div className="container biography">
      <div className="banner">
        <img src={imageUrl} alt="biography-image" />
      </div>
      <div className="banner">
        <p>Biography</p>
        <h3>Who We Are</h3>
        <p>
          As a team of dedicated professionals, we are committed to excellence
          in every endeavor. Our mission is to deliver services and solutions
          that not only meet but exceed expectations. We are driven by
          innovation, uphold the highest standards of integrity, and place
          customer satisfaction at the forefront of our objectives. Join us on
          our journey to make a significant impact in our industry.
        </p>

        <p>
          Our team is steadfast in its dedication to providing service that
          stands out in its excellence. We believe that our commitment to our
          clients reflects our organizational ethos.
        </p>

        <p>
          Striving for excellence is not just an aim but a way of life for us.
          We believe that the pursuit of excellence in all our actions sets us
          apart.
        </p>

        <p>
          We are more than just a team; we are a community of professionals
          dedicated to delivering the highest quality of service. Our mission is
          to go beyond the norm, exceeding customer expectations through
          innovative solutions and exceptional service. We believe in the
          transformative power of collaboration and foster a culture of mutual
          respect and teamwork. Our actions are guided by a commitment to
          transparency and ethical conduct. We are always on the lookout for
          opportunities to grow and improve. Our passion for our work fuels our
          drive to make a positive impact.
        </p>
      </div>
    </div>
  );
};

export default Biography;
