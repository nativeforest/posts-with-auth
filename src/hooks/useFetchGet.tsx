import { AxiosResponse } from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { DummyService } from "../services/api/DummyService";


function useFetchGet (url:string) {
  const [data, setData] = useState<AxiosResponse<any, any>>();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const dummyService = new DummyService()

  useEffect(()=>{
    (async () => {
      try {
        const res = await dummyService.getPosts();
        if(res?.data){
          setData(res);
        }else{
          setData(res);
        }
        setLoading(false);
      } catch (err:any) {
        setError(err);
      } finally {
        setLoading(false);
      }
    })();

  },[url])

  return [data,loading,error]
}
export { useFetchGet}