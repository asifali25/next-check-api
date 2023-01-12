import { Fragment } from "react";
import { useState } from "react";

function MyPolicy () {
    const [policy, setPolicy] = useState([])
    const [value, setValue] = useState("")

   async function GetOutput() {
        // setValue(e.target.value)        
        const response = await fetch(`/api/policy`)
        const data = await response.json(response)
        setPolicy(data)
    }


    return(
        <Fragment>
            {/* <select onChange={GetOutput} value={value}>
                <option value="1">Max Life</option>
                <option value="2">HDFC Ergo</option>
            </select> */}

            <button onClick={GetOutput}>Get The Value</button>

            {policy.map((data) => {
                return(
                    <p key={data.id}>
                        {data.id} {data.plan}
                    </p>
                )
            })}

            
        </Fragment>
    )
}

export default MyPolicy; 