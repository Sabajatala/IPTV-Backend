import mongoose from 'mongoose';

const Schema = new mongoose.Schema({
    genreId: { type: mongoose.Schema.Types.ObjectId, ref: 'Genre', required: true },
    seriesId: { type: mongoose.Schema.Types.ObjectId, ref: 'Series', required: true },
});

const GenreSeries = mongoose.model('GenreSeries', Schema);
export default GenreSeries;
