import { useState, useContext } from "react";
import { MyContext } from "../Context/MyContext";
import { useNavigate } from "react-router-dom";
import {
  IconReport,
  IconBellRinging,
  IconLogout,
  IconSettings,
  IconUserCircle,
  IconBooks,
  IconMessages,
} from "@tabler/icons-react";
import { Group, Modal, Text, Button } from "@mantine/core";
import classes from "../Styles/navbar.module.css";

const linkData = [
  { link: "/myCourses", label: "My Courses", icon: IconBooks },
  { link: "", label: "Messages", icon: IconMessages },
  { link: "", label: "Reports", icon: IconReport },
  { link: "", label: "Settings", icon: IconSettings },
  { link: "", label: "Notifications", icon: IconBellRinging },
];

export function Navbar() {
  const navigate = useNavigate();
  const [active, setActive] = useState("");
  const [opened, setOpened] = useState(false);
  const { data } = useContext(MyContext);

  const modalOpen = () => {
    setOpened(true);
  };

  const modalClose = () => {
    setOpened(false);
  };

  const links = linkData.map((item) => {
    return (
      <a
        className={classes.link}
        data-active={item.label === active || undefined}
        href={item.link}
        key={item.label}
        onClick={(event) => {
          event.preventDefault();
          setActive(item.label);
          navigate(item.link);
        }}
      >
        <item.icon className={classes.linkIcon} stroke={1.5} />
        <span>{item.label}</span>
      </a>
    );
  });

  return (
    <nav className={classes.navbar}>
      <div className={classes.navbarMain}>
        <Group className={classes.header} justify="space-between">
          <h1>{"<LEARN>"}</h1>
        </Group>
        {links}
      </div>

      <div className={classes.footer}>
        <a
          href="#"
          className={classes.link}
          onClick={(event) => event.preventDefault()}
        >
          <IconUserCircle className={classes.linkIcon} stroke={1.5} />
          <span>{data?.email}</span>
        </a>

        <a href="#" className={classes.link} onClick={modalOpen}>
          <IconLogout className={classes.linkIcon} stroke={1.5} />
          <span>Log out</span>
        </a>
        <Modal
          opened={opened}
          onClose={modalClose}
          withCloseButton={false}
          size="xs"
          centered
        >
          <Text size="lg" ta="center">
            Log Out ?
          </Text>

          <Group m="xl" justify="center">
            <Button
              variant="filled"
              color="indigo"
              onClick={() => {
                navigate("/");
              }}
            >
              Yes
            </Button>
            <Button
              variant="filled"
              color="rgba(232, 86, 86, 1)"
              onClick={modalClose}
            >
              Cancel
            </Button>
          </Group>
        </Modal>
      </div>
    </nav>
  );
}
