
import { Box, Container, Paper, Typography, TextField, IconButton } from "@mui/material";
import { Send } from "@mui/icons-material";

const Dashboard = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '80vh' }}>
      <Typography variant="h3" component="h1" gutterBottom align="center" sx={{ color: "primary.main", fontWeight: "bold" }}>
        Eywa.ai
      </Typography>
      <Typography variant="h6" component="h2" gutterBottom align="center" sx={{ mb: 4 }}>
        Your Family's central consciousness
      </Typography>

      <Box mt={6} sx={{width: '100%'}}>
        <Paper elevation={3} sx={{ p: 3, borderRadius: "16px" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Ask anything"
              sx={{ mr: 1 }}
            />
            <IconButton color="primary">
              <Send />
            </IconButton>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
};

export default Dashboard;
