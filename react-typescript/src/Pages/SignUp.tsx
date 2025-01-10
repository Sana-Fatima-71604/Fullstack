// check for the values object
import { Link, redirect } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Card, TextInput, Button } from "@mantine/core";
import { useForm } from "@mantine/form";

interface value {
  name: string;
  email: string;
  password: number;
}

interface errorResponse {
  response?: {
    status: number;
    data: {
      message: string;
    };
  };
}

const SignUp: React.FC = () => {
  const form = useForm({
    mode: "uncontrolled",

    transformValues: (values) => ({
      name: values.name,
      email: values.email,
      password: values.password,
    }),
  });

  const signup = async (values: value) => {
    console.log("json values are " + values.name);

    try {
      const response = await axios.post(
        "http://localhost:4000/api/user/add",
        values
      );
      console.log(response.data);
      if (response.status === 201) {
        toast(response.data.message);
        redirect("/");
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
              signup(values);
            })}
          >
            <TextInput
              type="string"
              label="User Name"
              placeholder="User Name"
              key={form.key("name")}
              {...form.getInputProps("name")}
            />
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
              Register
            </Button>
          </form>
        </Card.Section>
        <br />

        <ToastContainer />

        <Link to="/" className="link">
          or Sign_In
        </Link>
      </Card>
    </>
  );
};

export default SignUp;
