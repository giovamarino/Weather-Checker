const MainCard = ({ typedCity }) => {
  return (
    <div className="mainCard">
      <div className="mainCardHeader">
        <div>
          <h1>Today</h1>
        </div>
        <div>
          <h1>{typedCity}</h1>
        </div>
      </div>
    </div>
  );
};

export default MainCard;
