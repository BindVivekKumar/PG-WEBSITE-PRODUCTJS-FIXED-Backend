// const query=require("../schema/query")




// exports.updateController=async(req,res)=>{

//     try {
//         const {fullName,phone,email,requirement,address,message}=req.body;

//         if(!fullName ||
//             !phone||
//             !email||
//             !requirement||
//             !address||
//             !message
//         ){
//             return res.status(400).json({
//                 success:false,
//                 message:"Not filled All the data,Please filled ANd try again"
//             })
//         }

//         const newquery=await query.create({
//             fullName,
//             phone,
//             email,
//             requirement,
//             message,
//             createdAt:Date.now()
//         })
        
//         await newquery.save();
//         return res.status(201).json({
//             success:true,
//             message:"Your Query is Submitted SuccessFully"
//         })
//     } catch (error) {
//         return res.status(500).json({
//             success:false,
//             message:"Internal Server Error"
//         })
        
//     }
// }