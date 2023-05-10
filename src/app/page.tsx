"use client";

import { Button, Card, TextField } from "@mui/material";

export default function Home() {
  return (
    <div>
      <Card>
        <Button variant="contained">Text</Button>
        <TextField
          id="outlined-basic"
          variant="outlined"
          inputProps={{
            autoComplete: "none",
          }}
        />
      </Card>
    </div>
  );
}
