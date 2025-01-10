import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Card, TextInput, Button } from "@mantine/core";
import { useForm } from "@mantine/form";

export interface value {
  email: string;
  password: string;
}
interface errorResponse {
  response?: {
    status: number;
    data: {
      message: string;
    };
  };
}
interface props {
  values: (values: value) => void;
}

const SignIn: React.FC<props> = (props) => {
  const navigate = useNavigate();

  const form = useForm({
    mode: "uncontrolled",

    transformValues: (values) => ({
      email: values.email,
      password: values.password,
    }),
  });

  const signin = async (values: value) => {
    try {
      const response = await axios.post(
        "http://localhost:4000/api/user/login",
        values
      );
      if (response.status === 200) {
        toast(response.data.message);
        const fetchData = await axios.get(
          "http://localhost:4000/api/user/getUserAccount"
        );
        console.log(fetchData.data);
        props.values(values);
        navigate("/dashboard");
      }
    } catch (error) {
      const typerror = error as errorResponse;
      if (typerror.response) {
        if (typerror.response.status === 409) {
          toast(typerror.response.data.message);
        } else {
          toast("An error occurred: " + typerror.response.data.message);
        }
        console.log(typerror);
      }
    }
  };
  return (
    <>
      <Card
        shadow="lg"
        radius="md"
        w={400}
        p={50}
        style={{ margin: "auto", marginTop: "100px" }}
        withBorder
      >
        <Card.Section>
          <form
            onSubmit={form.onSubmit((values) => {
              signin(values);
            })}
          >
            <TextInput
              type="string"
              label="Email Id"
              placeholder="User Email Id"
              key={form.key("email")}
              {...form.getInputProps("email")}
            />
            <TextInput
              type="string"
              label="Password"
              placeholder="User Password"
              mt="md"
              key={form.key("password")}
              {...form.getInputProps("password")}
            />
            <Button type="submit" mt="md">
              Login
            </Button>
          </form>
        </Card.Section>
        <br />

        <Link to="/signup" className="link">
          or Sign_Up
        </Link>
        <ToastContainer />
      </Card>
    </>
  );
};

export default SignIn;
