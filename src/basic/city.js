const Mycity = () => {
  let cityarr = ["Bangalore", "Chennai", "Kolkata", "Mangalore"];

  return (
    <>
      <h2>City LIST</h2>
      <div className="flex-city">
        {cityarr.map((cityname, index) => (
          <p key={index} className="citis">
            {cityname}
          </p>
        ))}
      </div>
    </>
  );
};

export default Mycity;
