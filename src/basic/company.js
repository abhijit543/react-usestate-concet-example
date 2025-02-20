const Mycompany = () => {
  let companies = ["Google", "Microsoft", "Apple", "Amazon", "Facebook", "Tesla", "IBM"];
  return (
    <>
      <h2>Company List</h2>
      <div className="container">
        {companies.map((comapny, index) => (
          <div className="company-box" key={index}>
            {comapny}
          </div>
        ))}
      </div>
    </>
  );
};
export default Mycompany;
