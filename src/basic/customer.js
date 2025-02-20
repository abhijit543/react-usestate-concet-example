
const Mycustomer = () => {

    let allcustomer = [
        { city: "Bangalore", userlist: ['alex', 'mahesh'] },
        { city: "Pune", userlist: ['anuj', 'sunil', 'pawan'] },
        { city: "Chennai", userlist: ['Suraj', 'ganesh', 'punit'] },
        { city: "Delhi", userlist: ['Suresh'] }
    ];

    return(
        <section>
            <h1> React Nested Map() </h1>
            {
                allcustomer.map((customer, index)=>{
                    return(
                        <fieldset key={index}>
                            <legend> {customer.city} </legend>
                            {
                                customer.userlist.map((fullname, index2)=>{
                                    return(
                                        <p key={index2}> {fullname} </p>
                                    )
                                })
                            }
                        </fieldset>
                    )
                })
            }
        </section>
    )
}

export default Mycustomer;