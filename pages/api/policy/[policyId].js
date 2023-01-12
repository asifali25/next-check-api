import { policydata } from "../../../data/policydata";

export default function handler(req, res) {
    const {policyId} = req.query; 
        const policy = policydata.find(comment => comment.id === parseInt(policyId))
        res.status(200).json(policy)
        
        console.log(policyId)
}

