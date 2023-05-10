"use client";

import ProfileCard from "@/components/ProfileCard/ProfileCard";
import { Button, Card, Stack, TextField } from "@mui/material";

export default function Home() {
  return (
    <Stack direction="row" spacing={2} padding={2}>
      <Stack
        sx={{
          width: "300px",
        }}
      >
        <ProfileCard />
      </Stack>
      <Card
        sx={{
          flex: 1,
          height: "1000px",
        }}
      >
        <Button variant="contained">Text</Button>
        <TextField
          id="outlined-basic"
          variant="outlined"
          inputProps={{
            autoComplete: "none",
          }}
        />
      </Card>
      <Stack
        sx={{
          width: "300px",
        }}
      >
        <Card>d</Card>
      </Stack>
    </Stack>
  );
}
