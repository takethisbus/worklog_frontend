import { Logo } from "@/shared/ui/Logo";
import {
  Box,
  Divider,
  Grid,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Typography
} from "@mui/material";
import { grey } from "@mui/material/colors";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

export const LeftSideBar = () => {
  return (
    <Grid
      item
      xs={3}
      sx={{
        borderRight: `1px solid ${grey[300]}`,
        height: "100vh",
        width: 250
      }}
    >
      <Box
        component="h1"
        display="flex"
        alignItems="center"
        gap={1}
        sx={{ p: 2 }}
      >
        <Logo width="24" height="24" />
        <Typography variant="h6" component="span">
          Worklog
        </Typography>
      </Box>
      <Divider />
      <List
        sx={{ width: "100%", bgcolor: "background.paper", p: 2 }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="h6" id="nested-list-subheader">
            Summary
          </ListSubheader>
        }
      >
        <ListItemButton sx={{ borderRadius: 2 }}>
          <ListItemIcon sx={{ minWidth: 28 }}>
            <FiberManualRecordIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText secondary="2011-11-11" />
        </ListItemButton>
      </List>
    </Grid>
  );
};
