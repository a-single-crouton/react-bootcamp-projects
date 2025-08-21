const Star = ({ star, hover, rating, color }) => {
  return (
    <span className="{`star ${star <= (hover || rating) ? 'active' : ''}`}">
      {'\u2605'}
    </span>
  );
};

export default Star;
