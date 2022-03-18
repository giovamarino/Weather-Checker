const ContentCards = ({ temperature }) => {
  // 0 22-03-18 6:00:00
  // 8 22-03-19 6:00:00
  // 16 22-03-20 6:00:00
  // 24 22-03-21 6:00:00
  // 32 22-03-22 6:00:00t

  return (
    <div className="contentCards">
      <p>Temperature: {temperature}° F</p>
      <p>Temperature:</p>
      <p>Temperature:</p>
      <p>Temperature:</p>
    </div>
  );
};

export default ContentCards;
