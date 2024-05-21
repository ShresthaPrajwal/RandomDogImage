import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Image from '../components/Image';
import { fetchRandomDogImageAction } from '../redux/actions/dogImageActions';
import NavBar from '../components/Navbar';

function DogImagePage() {
  const dispatch = useDispatch();
  const imageUrl = useSelector((state) => state.dogImage.imageUrl);
  const baseUrl = useSelector((state) => state.baseUrl);

  const handleFetchDogImage = async () => {
    try {
      dispatch(fetchRandomDogImageAction(baseUrl));
    } catch (error) {
      console.error('Failed to fetch dog image:', error);
    }
  };

  useEffect(() => {
    if (!imageUrl) {
      handleFetchDogImage();
    }
  }, [imageUrl]);

  return (
    <div className='text-center'>
      <NavBar />
      <div className='flex flex-col justify-center items-center h-1/2'>
        <h1 className='text-slate-900 text-3xl m-10'>
          Generate Random Dog Images
        </h1>
        {imageUrl ? (
          <Image src={imageUrl} alt='Random Dog Image' />
        ) : (
          <p>Fetching dog image...</p>
        )}
        <button
          onClick={handleFetchDogImage}
          className='bg-slate-900 hover:bg-gray-400 text-gray-100 hover:text-gray-100 font-bold py-2 px-4 rounded-xl w-1/4'
        >
          Get Random Dog Image
        </button>
      </div>
    </div>
  );
}

export default DogImagePage;
