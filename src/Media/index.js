import * as React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../Components/Card'
import "./index.css";
import Container from '@mui/material/Container';


export default function Media() {
  const card_num = [1,2,3,4,5,6]
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const taskId = "667f7db5997a28d63916246a"
  const userId = "667f7b9bc3a705d90fd19733"
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8080/api/task/667f7db5997a28d63916246a');
        
        response.data.taskData.startDate = new Date(response.data.taskData.startDate)
        response.data.taskData.endDate = new Date(response.data.taskData.endDate)
        response.data.taskData.leftSeconds = response.data.taskData.endDate - Date.now()
        response.data.taskData.leftDays = Math.floor(response.data.taskData.leftSeconds / (1000 * 60 * 60 * 24))
        setData({
          task: response.data.taskData,
          join: response.data.joinData,
          user: response.data.joinData.find(o => o.userId._id==userId)
        });
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <Container>
      <div className='your-progress'>
        <p>taskName: {data.task.taskName}</p>
        <p>threshold: {data.task.threshold}</p>
        <p>progress: {data.user.photos.length}</p>
        <p>leftDays: {data.task.leftDays}</p>
      </div>

      <div className='task-details'>
        <p>StartDate:{data.task.startDate.toLocaleDateString()}</p> 
        <p>endDate:{data.task.endDate.toLocaleDateString()}</p> 
        <p>threshold: {data.task.threshold}</p>
        <p>participants: {data.task.participants}</p>
      </div>
      
      <div className='container3'>
          {
            data.join.map((data, index) => (
              <div className="item"  key={index}> <Card data={data}/> </div>
          ))
        }
      </div>
    </Container>
  )
}