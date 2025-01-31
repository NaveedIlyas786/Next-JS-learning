const getData = async () => {
  try {
    const response = await fetch('http://localhost:3000/api/callMongoDB',{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    const data = await response.json();
    console.log(data)
    return data;
  } catch (error) {
    console.error('Error:', error);
  }
};


export default async function GetDataFromDB(){
  const data1 = await getData();
  console.log("data1: ",data1)
    return (
        <div>
            {data1?.map((a)=>(
              <div key={a._id}>
              
            <h1>{a.title}</h1>
            <h4>{a.content}</h4>
              </div>
          ))}
          </div>
    )
}