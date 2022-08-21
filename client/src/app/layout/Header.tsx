import { AppBar, Switch, Toolbar, Typography } from "@mui/material";
interface Props {
  darkMode: boolean;
  onHandleThemChange: () => void;
}
export default function Header({ darkMode, onHandleThemChange }: Props) {
  return (
    <AppBar position="static" sx={{ mb: 4 }}>
      <Toolbar>
        <Typography variant="h6">RE-STORE</Typography>
        <Switch checked={darkMode} onChange={onHandleThemChange} />
      </Toolbar>
    </AppBar>
  );
}
