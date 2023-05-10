import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Avatar,
  Box,
  Stack,
  Divider,
} from "@mui/material";
import React from "react";

function ProfileCard() {
  return (
    <Card sx={{ padding: "0px" }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="100"
        image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
      />
      <CardContent>
        <Box
          sx={{
            position: "relative",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Avatar
            sx={{
              width: 74,
              height: 74,
              position: "absolute",
              top: "-55px",
              display: "inline-block",
            }}
            alt="Remy Sharp"
            src="https://mui.com/static/images/avatar/1.jpg"
          />
        </Box>
        <Stack justifyContent="center" alignItems="center" pt={3}>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ mb: "0px" }}
          >
            Lizard
          </Typography>
          <Typography
            gutterBottom
            variant="subtitle2"
            component="div"
            pt={0}
            color="primary"
          >
            @alidanial
          </Typography>
          <Typography variant="body1" component="div" textAlign="center">
            Lizards are a widespread group of squamate reptiles
          </Typography>
          <Divider
            sx={{
              width: "100%",
              my: 2,
            }}
          />
          <Stack direction="row" width="100%">
            <Box
              sx={{
                flex: 1,
              }}
            >
              <Stack>
                <Typography variant="body1" textAlign="center">
                  1024
                </Typography>
                <Typography variant="body1" textAlign="center">
                  Following
                </Typography>
              </Stack>
            </Box>
            <Divider orientation="vertical" flexItem />
            <Box
              sx={{
                flex: 1,
              }}
            >
              <Stack>
                <Typography variant="body1" textAlign="center">
                  1024
                </Typography>
                <Typography variant="body1" textAlign="center">
                  Followers
                </Typography>
              </Stack>
            </Box>
          </Stack>
        </Stack>
        <Divider
          sx={{
            width: "100%",
            my: 2,
          }}
        />
        <Stack>
          <Button variant="text">My Profile</Button>
        </Stack>
      </CardContent>
    </Card>
  );
}

export default ProfileCard;
