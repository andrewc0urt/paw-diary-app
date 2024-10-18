import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid2";
import Container from "@mui/material/Container";
import PetAvatar from "../profile/PetAvatar";

import DashboardProfileCard from "./dashboard-components/DashboardProfileCard";
import AccordionEx from "../profile-version2/AccordionEx";
import AllergiesList from "../profile-version2/AllergiesList";

import DashboardAccordion from "./dashboard-components/DashboardAccordion";

import InteractiveList from "./dashboard-components/InteractiveList";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));

export default function Dashboard() {
  return (
    <Box sx={{ flexGrow: 1, mt: 2 }}>
      <Grid container spacing={3}>
        <Grid size={{ xs: 12, md: 5, lg: 4 }} sx={{ width: { lg: "345px" } }}>
          <DashboardProfileCard />
        </Grid>

        <Grid container spacing={4} size={{ xs: 12, md: 10, lg: 8 }}>
          <Grid size={{ xs: 10, lg: 12 }}>
            <Item>
              <Box
                id="category-b"
                sx={{ fontSize: "12px", textTransform: "uppercase" }}
              >
                Dietary Information
              </Box>
              <Container
                sx={{ display: "flex", justifyContent: "space-around" }}
              >
                <Box component="ul" aria-labelledby="category-b" sx={{ pl: 2 }}>
                  {/* <li>Link 2.1</li>
                <li>Link 2.2</li>
                <li>Link 2.3</li> */}
                  {/* <AccordionEx
                  textLabel={"Allergies"}
                  ListComponent={AllergiesList}
                /> */}
                  <DashboardAccordion title={"Current Food"} />
                </Box>
                <Box component="ul" aria-labelledby="category-b" sx={{ pl: 2 }}>
                  {/* <li>Link 2.1</li>
                <li>Link 2.2</li>
                <li>Link 2.3</li> */}
                  {/* <AccordionEx
                  textLabel={"Allergies"}
                  ListComponent={AllergiesList}
                /> */}
                  <DashboardAccordion title={"Treats & Misc."} />
                </Box>
              </Container>
            </Item>
          </Grid>

          <Grid size={{ xs: 10, lg: 12 }}>
            <Item>
              <Box
                id="category-b"
                sx={{ fontSize: "12px", textTransform: "uppercase" }}
              >
                Allergies & Medications
              </Box>
              <Container
                sx={{ display: "flex", justifyContent: "space-around" }}
              >
                <Box component="ul" aria-labelledby="category-b" sx={{ pl: 2 }}>
                  {/* <li>Link 2.1</li>
                <li>Link 2.2</li>
                <li>Link 2.3</li> */}
                  {/* <AccordionEx
                  textLabel={"Allergies"}
                  ListComponent={AllergiesList}
                /> */}
                  <DashboardAccordion title={"View All Allergies"} />
                </Box>
                <Box component="ul" aria-labelledby="category-b" sx={{ pl: 2 }}>
                  {/* <li>Link 2.1</li>
                <li>Link 2.2</li>
                <li>Link 2.3</li> */}
                  {/* <AccordionEx
                  textLabel={"Allergies"}
                  ListComponent={AllergiesList}
                /> */}
                  <DashboardAccordion title={"View All Medicines"} />
                </Box>
              </Container>
            </Item>
          </Grid>

          {/* Grid for Injuries/Illness & Behavioral Notes */}
          <Grid size={{ xs: 10, lg: 12 }}>
            <Item>
              <Box
                id="category-b"
                sx={{ fontSize: "12px", textTransform: "uppercase" }}
              >
                Injury, Illness, Behavioral Notes
              </Box>
              <Container
                sx={{ display: "flex", justifyContent: "space-around" }}
              >
                <Box component="ul" aria-labelledby="category-b" sx={{ pl: 2 }}>
                  {/* <li>Link 2.1</li>
                <li>Link 2.2</li>
                <li>Link 2.3</li> */}
                  {/* <AccordionEx
                  textLabel={"Allergies"}
                  ListComponent={AllergiesList}
                /> */}
                  <DashboardAccordion title={"View Injuries/Illnesses"} />
                </Box>
                <Box component="ul" aria-labelledby="category-b" sx={{ pl: 2 }}>
                  {/* <li>Link 2.1</li>
                <li>Link 2.2</li>
                <li>Link 2.3</li> */}
                  {/* <AccordionEx
                  textLabel={"Allergies"}
                  ListComponent={AllergiesList}
                /> */}
                  <DashboardAccordion title={"View Behavioral Notes"} />
                </Box>
              </Container>
            </Item>
          </Grid>

          <Grid size={{ xs: 10, lg: 12 }}>
            <Item>
              <Box
                id="category-d"
                sx={{ fontSize: "12px", textTransform: "uppercase" }}
              >
                Questions & Notes for Your Vet
              </Box>
              <Box component="div" aria-labelledby="category-d" sx={{ pl: 2 }}>
                <p>What causes heavy breathing & licking lips?</p>
                <p>Why does he eat grass on walks?</p>
                <p>What am I supposed to give her for her joints?</p>
              </Box>
            </Item>
          </Grid>
        </Grid>
        {/* <Grid
          container
          justifyContent="space-between"
          alignItems="center"
          flexDirection={{ xs: "column", sm: "row" }}
          sx={{ fontSize: "12px" }}
          size={12}
        >
          <Grid sx={{ order: { xs: 12, sm: 1 } }}>
            <Item>© Copyright</Item>
          </Grid>
          <Grid container columnSpacing={1} sx={{ order: { xs: 1, sm: 2 } }}>
            <Grid>
              <Item>Link A</Item>
            </Grid>
            <Grid>
              <Item>Link B</Item>
            </Grid>
            <Grid>
              <Item>Link C</Item>
            </Grid>
          </Grid>
        </Grid> */}
      </Grid>

      {/* <InteractiveList /> */}
    </Box>
  );
}
