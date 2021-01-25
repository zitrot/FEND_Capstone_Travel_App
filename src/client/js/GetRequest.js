// Async GET
const retrieveData = async(url = '') => {
    const request = await fetch(url);
    try {
        // Transform into JSON
        const Data = await request.json();
        return Data;
    } catch (error) {
        console.log("GetError", error);
        // appropriately handle the error
    }
};

export { retrieveData };