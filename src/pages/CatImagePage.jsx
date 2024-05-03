import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Image from '../components/Image';
import fetchImage from '../services/api';
import NavBar from '../components/Navbar';
import { fetchRandomCatImageAction } from '../redux/actions/catImageAction';

function CatImagePage() {
  const dispatch = useDispatch();
  const imageUrl = useSelector((state) => state.catImage.imageUrl);
  const baseUrl = useSelector((state) => state.baseUrl);

  const handleFetchCatImage = async () => {
    try {
      const imageUrl = await fetchImage(baseUrl);
      dispatch(fetchRandomCatImageAction(imageUrl));
    } catch (error) {
      console.error('Failed to fetch dog image:', error);
    }
  };

  useEffect(() => {
    handleFetchCatImage();
  }, []);

  return (
    <div className='text-center'>
      <NavBar />
      <div className='flex flex-col justify-center items-center h-1/2'>
        <h1 className='text-slate-900 text-3xl m-10'>
          Generate Random Cat Images
        </h1>
        {imageUrl ? (
          <Image src={imageUrl} alt='Random Cat Image' />
        ) : (
          <p>Fetching Cat image...</p>
        )}
        <button
          onClick={handleFetchCatImage}
          className='bg-slate-900 hover:bg-gray-400 text-gray-100 hover:text-gray-100 font-bold py-2 px-4 rounded-xl w-1/4'
        >
          Get Random Cat Image
        </button>
      </div>
    </div>
  );
}

export default CatImagePage;
