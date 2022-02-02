import { useNavigate, useSearchParams } from 'react-router-dom';

const Edit = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const id = searchParams.get('id');

  const mode = searchParams.get('mode');

  return (
    <div>
      <h1>Edit</h1>
      <p>Edit입니다.</p>
      <button onClick={() => setSearchParams({ who: 'hyesu' })}>버튼</button>
      <button
        onClick={() => {
          navigate('/home');
        }}
      >
        홈으로가기
      </button>
    </div>
  );
};

export default Edit;
