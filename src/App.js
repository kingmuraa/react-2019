import React from "react";
import PropTypes from "prop-types";

function Food({ name, picture, rating }){
   return <div>
         <h2> I like {name}</h2>
         <h4>{rating}/5.0</h4>
         <img src={picture} />
      </div>
}

Food.propTypes = {
   name: PropTypes.string.isRequired,
   picture: PropTypes.string.isRequired,
   rating: PropTypes.number
};

const foodILike = [
   {
   id: 1,
   name: "Kimchi",
   image: "https://kstory365.files.wordpress.com/2015/01/kimchi-01-cabbage.jpg",
   },
   {
   id: 2,
   name: "bulgogi",
   image: "https://www.hapskorea.com/wp-content/uploads/2011/03/bulgogi.jpg",
   rating: 4.7
   },
   {
   id: 3,
   name: "kimbap",
   image: "https://www.tsunagulocal.com/wp-content/uploads/2021/02/pixta_65991015_M.jpg",
   rating: 4.9
   },
   {
   id: 4,
   name: "samgyetang",
   image: "https://img.seoul.co.kr//img/upload/2019/07/25/SSI_20190725184016.jpg",
   rating: 2.9
   }
];
   

function App() {
   return (
      <div>
         {foodILike.map(dish => (
            <Food 
               key={dish.id} 
               name={dish.name} 
               picture={dish.image} 
               rating={dish.rating} 
               /> 
            ))}
      </div>
      );
}

export default App;