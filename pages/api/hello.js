// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Test from "../../models/testing";
import dbConnect from "../../utils/dbConnect";


export default async function handler(req, res) {

    let {method} = req;

    switch(method){
        case 'PUT':
          try {
            const Test = await Test.create(req.body);

            res.status(201).json({ success: true, data: note })
        } catch (error) {
            res.status(400).json({ success: false });
        }
        
        break;
    default:
        res.status(400).json({ success: false });
        break;
      }

}
