import axios from "axios";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../../firebase.init";
import useServiceDetails from "../../../../Hooks/useServiceDetails.js/useServiceDetails";

const CheckOut = () => {
  const { serviceId } = useParams();
  const [service, setService] = useServiceDetails(serviceId);
  const [user] = useAuthState(auth);

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    const order = {
      name: user.displayName,
      email: user.email,
      service: service.name,
      serviceId,
      address: e.target.address.value,
      phone: e.target.phone.value,
    };


    axios
      .post("http://localhost:5000/order", order)
      .then((response) => {
        if (response.data.insertedId) {
          toast.success("Your Order is booked");
          e.target.reset();
        }
      })
      .catch(function (error) {
        console.log(error);
      });

    /* const [user, setUser] = useState({
    name: "Arfatur Rahman",
    email: "arfatrahman08@gmail.com",
    address: "Chittagong, Bangladesh",
    phone: "01819439292",
  });

  const handleAddressChange = (e) => {
    const { address, ...rest } = user;
    const newAddress = e.target.value;
    const newUser = { address: newAddress, ...rest };
    setUser(newUser);
  }; */
  };
  return (
    <div className="w-50 mx-auto">
      <h1>Please Order : {service.name}</h1>
      <form action="" onSubmit={handlePlaceOrder}>
        <br />
        <input
          className="rounded border-1 ps-2  w-100 mb-2"
          type="text"
          name="name"
          value={user?.displayName}
          placeholder="Name"
          required
          readOnly
          disabled
          id=""
        />
        <br />
        <input
          className="rounded border-1 ps-2  w-100 mb-2"
          type="email"
          name="email"
          placeholder="Email"
          value={user?.email}
          required
          readOnly
          disabled
          id=""
        />
        <br />
        <input
          className="rounded border-1 ps-2  w-100 mb-2"
          type="text"
          name="service"
          placeholder="Service"
          value={service.name}
          required
          readOnly
          disabled
          id=""
        />
        <br />
        <input
          className="rounded border-1 ps-2  w-100 mb-2"
          type="text"
          name="address"
          placeholder="Address"
          required
          id=""
        />
        <br />
        <input
          className="rounded border-1 ps-2  w-100 mb-2"
          type="text"
          name="phone"
          placeholder="Phone"
          required
          id=""
        />

        <br />
        <input
          className="w-100 mb-2 btn btn-primary"
          type="submit"
          value="Place Order"
        />
      </form>
    </div>
  );
};

export default CheckOut;
