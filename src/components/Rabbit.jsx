import React, { useEffect, useState } from 'react'
import RabbitTracks from "/rabbit-tracks.jpg"
import Bunny from "/rabbit.webp";
import { Link } from 'react-router-dom';

function Rabbit({ onClick }) {
     
  return (
    <>
    <h2>Snowshoe hare</h2>
    <img src={RabbitTracks} alt="" />
    <p>Snowshoe hares fall under the category of hoppers. Hoppers make a clump of four tracks in the snow, a space, then another clump of tracks. The large tracks are the hind feet and the small tracks are the front feet.</p>
    <p>The pattern of squirrels and rabbits is confusing, since the larger hind foot shows up in front. While the rabbit has one of the front feet ahead of the other, the smaller front feet of the squirrel are together.</p>
    
    <Link to={"/learn-more"}><img src={Bunny} alt="" onClick={onClick}/></Link>
    <p>Follow the white rabbit to learn more 🐾🐾🐾
    </p>
    </>
    
  )
}

export default Rabbit;