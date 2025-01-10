import { Card, Image, Text, Badge, Button, Group } from "@mantine/core";

interface display {
  image: string | null;
  button: string | null;
  title: string | null;
}

function Cards(props: display) {
  return (
    <Card shadow="sm" padding="lg" radius="md" h={300} w={400} withBorder>
      <Card.Section>
        <Image src={props.image} height={160} alt="Norway" />
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>{props.title}</Text>
        <Badge color="pink">{props.button}</Badge>
      </Group>

      <Text size="sm" c="dimmed">
        With Fjord Tours you can explore more of the magical fjord landscapes
        with tours and activities on and around the fjords of Norway
      </Text>

      <Button color="blue" fullWidth mt="md" radius="md">
        Book classic tour now
      </Button>
    </Card>
  );
}

export default Cards;
