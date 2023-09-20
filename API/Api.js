const Base_URL = "https://rosa-verde-lqyr.onrender.com/";

export const getAllCategory = async () => {
    const url = "category/getAllCategory"
    return await AppFetch(url, "GET")
}
export const addCategory = async (body) => {
    const url = "category/addCategory"
    return await AppFetch(url, "POST", body)
}
export const getCategory = async (body) => {
    const url = "category/getCategory"
    return await AppFetch(url, "GET", body)
}
export const updateCategory = async (body) => {
    const url = "category/updateCategory"
    return await AppFetch(url, "PATCH", body)
}
export const deleteCategory = async (body) => {
    const url = "category/deleteCategory"
    return await AppFetch(url, "DELETE", body)
}
export const getAllPlant = async () => {
    const url = "plant/getAllPlant"
    return await AppFetch(url, "GET")
}
export const addPlant = async (body) => {
    const url = "plant/addPlant"
    return await AppFetch(url, "POST", body)
}
export const getPlant = async (body) => {
    const url = "plant/getPlant"
    return await AppFetch(url, "GET", body)
}
export const deletePlant = async (body) => {
    const url = "plant/deletePlant"
    return await AppFetch(url, "DELETE", body)
}
export const updatePlant = async (body) => {
    const url = "plant/updatePlant"
    return await AppFetch(url, "PATCH", body)
}
export const addPlantToCategory = async (body) => {
    const url = "plant/addPlantToCategory"
    return await AppFetch(url, "POST", body)
}
export const signup = async (body) => {
    const url = "/signup"
    return await AppFetch(url, "POST", body)
}
export const login = async (body) => {
    const url = "/login"
    return await AppFetch(url, "POST", body)
}
export const addImageURL = async (body) => {
    const url = "/addImageURL"
    return await AppFetch(url, "POST", body)
}
export const getCategoryImage = async (body) =>{
    const url = "/getImage"
    return await AppFetch(url, "GET", body)
}
export const addMyPlant = async (body) => {
    const url = "/addMyPlant"
    return await AppFetch(url,"POST", body)
}
export const getMyPlant = async (body) => {
    const url = "/getMyPlant"
    return await AppFetch(url, "Get", body)
}
export const deleteMyPlant = async (body) => {
    const url = "/deleteMyPlant"
    return await AppFetch(url, "DELETE", body)
}
export const getAllMyPlant = async () => {
    const url = "/getAllMyPlant"
    return await AppFetch(url, "GET")
}
export const updateMyPlant = async (body) => {
    const url = "/updateMyPlant"
    return await AppFetch(url, "PATCH", body)
}

const AppFetch = async (url , method , body) => {
    const fullUrl = Base_URL + url
    console.log("fullUrl: " , fullUrl);
   return await fetch(fullUrl, {
        "method": method,
        body: body,
    }
    )
        .then(res => {
            console.log("req: ", fullUrl, "response code: ", res?.status);
            return res?.json?.()
        })
        .then(resJson => {
            return resJson;
        })
        .catch(e => {
            console.log("fetch error: ", e);
        })

}