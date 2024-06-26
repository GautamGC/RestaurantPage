import React from 'react';
import { Link } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const Menu = () => {
  return (
    <div className="menu-container">
      <h2><img src="https://cdn.pixabay.com/photo/2015/10/23/15/51/coffee-1003185__480.jpg" alt="" className="logoss" /></h2>
      <h1>Menu</h1>
      <div className="category-heading">Starters</div>
      <div className="dish-item starter">
        <h3>Bruschetta</h3>
        <p>Tomato, garlic, basil, olive oil.</p>
        <p>Price: $7</p>
      </div>
      <div className="dish-item starter">
        <h3>Mozzarella in Carozza</h3>
        <p>Breaded mozzarella with tomato sauce.</p>
        <p>Price: $9</p>
      </div>

      <div className="category-heading">Main Courses</div>
      <div className="dish-item main-course">
        <h3>Pasta Carbonara</h3>
        <p>Spaghetti, guanciale, pecorino romano cheese.</p>
        <p>Price: $12</p>
      </div>
      <div className="dish-item main-course">
        <h3>Risotto alla Milanese</h3>
        <p>Saffron-infused rice, saffron broth, bone marrow.</p>
        <p>Price: $16</p>
      </div>

      <div className="category-heading">Desserts</div>
      <div className="dish-item dessert">
        <h3>Tiramisu</h3>
        <p>Coffee-flavored sponge cake layered with mascarpone cream.</p>
        <p>Price: $8</p>
      </div>
      <div className="dish-item dessert">
        <h3>IceCream</h3>
        <p>Vanilla, Chocolate, or Strawberry .</p>
        <p>Price: $6</p>
      </div>
      <br />
      <div className='GoBack'>
      <Link to={"/"}>
            Back to Home{" "}
            <span>
              <HiOutlineArrowNarrowRight />
            </span>
          </Link>
        </div>
    </div>

  );
};

export default Menu;
