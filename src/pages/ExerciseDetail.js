import React,{ useEffect,useState} from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import { exerciseOptions,fetchData, youtubeOptions } from '../utils/fetchData';
import SimilarExercises from '../components/SimilarExercises';
import ExerciseVideos from '../components/ExerciseVideos';
import Details from '../components/Details';

const ExerciseDetail = () => {

  const [exerciseDetail, setExerciseDetail] = useState({});
  const { id } = useParams();

  useEffect(() =>{
    const fetchExercisesData = async () =>{
      const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
      const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';

      const exercisesDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`,exerciseOptions);
      setExerciseDetail(exercisesDetailData);

      const exerciseVideosData = await fetchData(`${youtubeSearchUrl}/search?q=${exerciseDetail.name}`,youtubeOptions);
    }

    fetchExercisesData();
  },[id]);
  return (
    <Box>
      <Details exerciseDetail={exerciseDetail}/>
      <ExerciseVideos />
      <SimilarExercises />
    </Box>
  )
}

export default ExerciseDetail