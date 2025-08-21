interface StarProps {
  star: number;
  rating: number;
  hover: number;
  color: string;
  starClicked: (star: number) => void;
  starEntered: (star: number) => void;
  starLeft: (star: number) => void;
}

const Star = ({
  star,
  rating,
  hover,
  color,
  starClicked,
  starEntered,
  starLeft,
}: StarProps) => {
  return (
    <span
      onClick={() => starClicked(star)}
      onMouseEnter={() => starEntered(star)}
      onMouseLeave={() => starLeft(star)}
      className='star'
      style={{ color: star <= (hover || rating) ? color : '#ccc' }}
    >
      {'\u2605'}
    </span>
  );
};

export default Star;
