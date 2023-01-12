import { policydata } from "../../../data/policydata";


export default function handler(req, res) {
    res.status(200).json(policydata)
}