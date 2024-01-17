import mongoose from "mongoose";


const InformationSchema = new mongoose.Schema({
    title: {
        type: String,
        unique: true,
        required: true  // You can add this if you want the field to be required as well
    },
    content: String,
    image: String,
    author: String,
    publishedDate: { type: Date, default: Date.now }
},
    { timestamps: true }
    // Add more fields as needed
);

const Information = mongoose.model("Information", InformationSchema);
export default Information;