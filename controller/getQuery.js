const query=require("../schema/query")



exports.getAllQuery=async(req,res)=>{


    try {
        const getAllQuery=await query.find();
        if(getAllQuery.size<=0){
            return res.status(400).json({
                success:false,
                message:"till not got Any Query"
            })
        }
        return res.status(200).json({
            success:true,
            message:`your All Query is `,
            getAllQuery:getAllQuery
        })
        
    }  catch (error) {
                console.log(error)

        return res.status(500).json({
            success:false,
            message:"Internal Server Error"
        })
        
    }
}