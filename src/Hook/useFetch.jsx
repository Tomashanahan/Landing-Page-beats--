import { useEffect, useState } from "react"


function useFetch(url) {
    const [info,setInfo] = useState([])
    
    async function getData(url) {
        try{
            const res = await fetch(url)
            const data = await res.json()
            setInfo(data)
        }catch (error){
            console.log(error)
        }
    }

    useEffect(()=>{
        getData(url)
    },[url])

    return info
}

export default useFetch