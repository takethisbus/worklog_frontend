import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader
} from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

export const DateList = () => {
  return (
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
  );
};
