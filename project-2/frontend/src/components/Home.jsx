import React from 'react';

const Home = () => {
  const homeContainerStyle = {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    padding: '20px',
    borderRadius: '8px',
    marginTop: '50px',
    marginBottom: '10px' 
  };

  const menuContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    maxWidth: '800px',
    margin: '0 auto', 
  };

  const dishesContainerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '20px', 
  };

  const vegColumnStyle = {
    flex: '1',
    marginRight: '10px', 
  };

  const nonVegColumnStyle = {
    flex: '1',
    marginLeft: '10px',
  };

  const vegMenuItems = [
    'Paneer Tikka',
    'Aloo Gobi',
    'Palak Paneer',
    'Vegetable Biryani',
    'Dal Tadka',
    'Chana Masala',
    'Baingan Bharta',
    'Mixed Veg Curry',
    'Mushroom Matar',
  ];

  const nonVegMenuItems = [
    'Chicken Tikka Masala',
    'Butter Chicken',
    'Mutton Curry',
    'Fish Curry',
    'Egg Biryani',
    'Chicken Korma',
    'Chicken Biryani',
  ];

  return (
    <div style={homeContainerStyle}>
      <div style={menuContainerStyle}>
        <h2 className="text-white text-3xl font-semibold mb-4">Menu</h2>
        <div style={dishesContainerStyle}>
          <div style={vegColumnStyle}>
            <h3 className="text-white text-xl font-semibold mb-4">Veg Menu</h3>
            <ul className="text-white">
              {vegMenuItems.map((dish, index) => (
                <li key={index}>{dish}</li>
              ))}
            </ul>
          </div>
          <div style={nonVegColumnStyle}>
            <h3 className="text-white text-xl font-semibold mb-4">Non-Veg Menu</h3>
            <ul className="text-white">
              {nonVegMenuItems.map((dish, index) => (
                <li key={index}>{dish}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

