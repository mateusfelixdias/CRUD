import { connect } from 'mongoose';

export function connection() {
  const connectMongodb = connect('mongodb://localhost:27017/crud', (err) => {
    if (err) return console.log(err);
  });

  return connectMongodb;
};