
import { Box, Container, Paper, Typography, TextField, IconButton } from "@mui/material";
import { Send } from "@mui/icons-material";
import DisqusComments from "../components/DisqusComments";

const Dashboard = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 4, pb: 8 }}>
      <Typography variant="h3" component="h1" gutterBottom align="center" sx={{ color: "primary.main", fontWeight: "bold" }}>
        Eywa.ai
      </Typography>
      <Typography variant="h6" component="h2" gutterBottom align="center" sx={{ mb: 4 }}>
        Your Family's central consciousness
      </Typography>

      <Box sx={{width: '100%', mt: 6}}>
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

      <Typography variant="body2" sx={{ mt: 2, textAlign: 'center', maxWidth: '80%', mx: 'auto' }}>
        Eywa is an LLM that that operates on your family's information. Do not worry where your information is. When you need it, Eywa will help you to find it instantly, reliably and securely.
      </Typography>

      <Box sx={{ width: '100%', mt: 8 }}>
        <Typography variant="h4" component="h2" gutterBottom align="center" sx={{ fontWeight: 'bold', mb: 4 }}>
          Pricing
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            gap: 4,
            justifyContent: 'center',
            alignItems: 'stretch'
          }}
        >
          <Box sx={{ flex: 1, minWidth: 0 }}>
            <Paper elevation={3} sx={{ p: 3, borderRadius: "16px", height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <Box>
                <Typography variant="h5" component="h3" gutterBottom align="center">
                  Individual
                </Typography>
                <Typography variant="body1" align="center">1 SGD/month</Typography>
                <Typography variant="body1" align="center" sx={{mb: 2}}>10 SGD/year</Typography>
              </Box>
              <Box>
                <Typography variant="subtitle1" align="center" sx={{mt: 2, fontWeight: 'bold'}}>Every extra user:</Typography>
                <Typography variant="body2" align="center">0.9 SGD/month</Typography>
                <Typography variant="body2" align="center">7.5 SGD/year</Typography>
              </Box>
            </Paper>
          </Box>
          <Box sx={{ flex: 1, minWidth: 0 }}>
            <Paper elevation={3} sx={{ p: 3, borderRadius: "16px", height: '100%' }}>
              <Typography variant="h5" component="h3" gutterBottom align="center">
                Family
              </Typography>
              <Typography variant="subtitle1" align="center" sx={{mb: 2}}>
                (up to 6 people)
              </Typography>
              <Typography variant="body1" align="center">5 SGD/month</Typography>
              <Typography variant="body1" align="center">30 SGD/year</Typography>
            </Paper>
          </Box>
        </Box>
      </Box>

      <Box sx={{ mt: 8 }}>
        <DisqusComments />
      </Box>
    </Container>
  );
};

export default Dashboard;
