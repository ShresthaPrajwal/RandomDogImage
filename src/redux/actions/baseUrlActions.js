import { setBaseUrl } from "../slices/baseUrlSlice"

export const setBaseUrlAction = (url)=>{
    return async dispatch=>{ 
        dispatch(setBaseUrl(url))
    }
}
