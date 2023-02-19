import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
    {
        // fname:{ type:String, required:true},
        // lname:{ type:String},
        // about:{ type:String},
        // address:{ type:String},
        // announcment_notify: { type:Boolean, default:true},
        // free_download_notify: { type:Boolean, default:true},
        // city: { type:String},
        // date_of_birth:{ type: Date},
        // email:{ type:String, unique:true, required:true, trim:true, lowercase:true},
        // email_verified_at:{ type: Date},

        username: { type: String, unique:true, required:true},
        createdAt: { type: Date, required:true}
    }
);

const User = mongoose.model("user", userSchema);

export default User;