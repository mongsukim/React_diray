import { useParams } from 'react-router-dom';

const Diary = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Diary</h1>
      <p>Diary입니다.</p>
    </div>
  );
};

export default Diary;
