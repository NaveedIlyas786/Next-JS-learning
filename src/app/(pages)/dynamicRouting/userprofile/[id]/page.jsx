'use Client'
const page = async ({ params }) => {
  //console.log("params: ",params)
  const {id} =await params;

  return (
    <div>
      <h1>My Profile {id}</h1>
      <p>Access the page based on the Id base, means (Dynamic routing)</p>
    </div>
  );
};

export default page;
