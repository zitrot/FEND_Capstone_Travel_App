// Async POST
const postData = async(url = '', data = {}) => {
    const response = await fetch(url, {
        method: 'POST',
        mode: 'same-origin',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(data), // body data type must match "Content-Type" header        
    });

    try {
        const newData = await response.json();
        return newData;
    } catch (error) {
        console.log("PostError", error);
    }
};


export { postData }