import React, { useState } from 'react';
import { Box, Tabs, Tab, Avatar, Grid, Paper, Typography, TextField, Container } from '@mui/material';

function StudentBio() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // Components for each tab's content
  const PersonalInfo = () => {
    const data = {
      firstName: "Kasun",
      middleName: "Tharinda",
      lastName: "de Silva",
      dateOfBirth: "2000-01-01",
      gender: "Male",
      nationality: "Sri Lankan",
      studentId: "20240001234",
      admissionDate: "2024-01-01",
    };
  
    return (
      <Container>
        <Box p={2}>
          <Typography variant="h6">Personal Information</Typography>
          <form noValidate autoComplete="off">
            <Grid container spacing={2}>
              {/* First row */}
              <Grid item xs={4}>
                <TextField
                  fullWidth
                  label="First Name"
                  defaultValue={data.firstName}
                  InputProps={{ readOnly: true }}
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  fullWidth
                  label="Middle Name"
                  defaultValue={data.middleName}
                  InputProps={{ readOnly: true }}
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  fullWidth
                  label="Last Name"
                  defaultValue={data.lastName}
                  InputProps={{ readOnly: true }}
                />
              </Grid>
              {/* Second row */}
              <Grid item xs={4}>
                <TextField
                  fullWidth
                  label="Date of Birth"
                  type="date"
                  defaultValue={data.dateOfBirth}
                  InputProps={{ readOnly: true }}
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  fullWidth
                  label="Gender"
                  defaultValue={data.gender}
                  InputProps={{ readOnly: true }}
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  fullWidth
                  label="Nationality"
                  defaultValue={data.nationality}
                  InputProps={{ readOnly: true }}
                />
              </Grid>
              {/* Third row */}
              <Grid item xs={4}>
                <TextField
                  fullWidth
                  label="Student ID"
                  defaultValue={data.studentId}
                  InputProps={{ readOnly: true }}
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  fullWidth
                  label="Admission Date"
                  type="date"
                  defaultValue={data.admissionDate}
                  InputProps={{ readOnly: true }}
                />
              </Grid>
            </Grid>
          </form>
        </Box>
      </Container>
    );
  };

  const ContactInfo = () => {
    const data = {
      addressLine1: "123 Main St",
      addressLine2: "Apt 4B",
      city: "Cityville",
      email: "kasun@example.com",
      mobilePhone: "071123123",
      residencePhone: "071456789",
      emergencyContacts: [
        { name: "John Doe", relationship: "Father", contactNumber: "071234567" },
        { name: "Jane Doe", relationship: "Mother", contactNumber: "071345678" },
        { name: "Mary Smith", relationship: "Aunt", contactNumber: "071456789" },
      ]
    };
  
    return (
      <Container>
        <Box p={2}>
          <Typography variant="h6">Contact Information</Typography>
          <form noValidate autoComplete="off">
            <Grid container spacing={2}>
              {/* First row */}
              <Grid item xs={4}>
                <TextField
                  fullWidth
                  label="Address Line 1"
                  defaultValue={data.addressLine1}
                  InputProps={{ readOnly: true }}
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  fullWidth
                  label="Address Line 2"
                  defaultValue={data.addressLine2}
                  InputProps={{ readOnly: true }}
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  fullWidth
                  label="City"
                  defaultValue={data.city}
                  InputProps={{ readOnly: true }}
                />
              </Grid>
              {/* Second row */}
              <Grid item xs={4}>
                <TextField
                  fullWidth
                  label="Email"
                  defaultValue={data.email}
                  InputProps={{ readOnly: true }}
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  fullWidth
                  label="Mobile Phone"
                  defaultValue={data.mobilePhone}
                  InputProps={{ readOnly: true }}
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  fullWidth
                  label="Residence Phone"
                  defaultValue={data.residencePhone}
                  InputProps={{ readOnly: true }}
                />
              </Grid>
              {/* Emergency contacts */}
              <Grid item xs={12}>
                <Typography variant="h6">Emergency Contacts</Typography>
                {data.emergencyContacts.map((contact, index) => (
                  <Grid container spacing={2} key={index} marginBottom={2}>
                    <Grid item xs={4}>
                      <TextField
                        fullWidth
                        label={`Emergency Contact ${index + 1} Name`}
                        defaultValue={contact.name}
                        InputProps={{ readOnly: true }}
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <TextField
                        fullWidth
                        label={`Relationship with Student ${index + 1}`}
                        defaultValue={contact.relationship}
                        InputProps={{ readOnly: true }}
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <TextField
                        fullWidth
                        label={`Contact Number ${index + 1}`}
                        defaultValue={contact.contactNumber}
                        InputProps={{ readOnly: true }}
                      />
                    </Grid>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </form>
        </Box>
      </Container>
    );
  };

  const PaymentInfo = () => (
    <Box p={2}>
      <Typography variant="h6">Payment Information</Typography>
      <Typography>Fees Paid: $5000</Typography>
      <Typography>Outstanding Balance: $1000</Typography>
      <Typography>Payment Method: Bank Transfer</Typography>
    </Box>
  );

  const OtherInfo = () => (
    <Box p={2}>
      <Typography variant="h6">Other Information</Typography>
      <Typography>Additional Notes: None</Typography>
    </Box>
  );

  return (
    <Box
      p={3}
      display="flex"
      flexDirection="column"
      alignItems="center"
      className="student-bio"
    >
      <Paper elevation={3} sx={{ padding: 2, marginBottom: 3, width: '60%' }}>
        <Grid container spacing={2} alignItems="center">
          <Grid item>
            <Avatar
              alt="Student"
              src="/student-img.webp"
              sx={{ width: 120, height: 120 }}
            />
          </Grid>
          <Grid item>
            <Typography variant="h5">Kasun Tharinda de Silva</Typography>
            <Typography variant="subtitle1">Student ID: 20240001234</Typography>
          </Grid>
        </Grid>
      </Paper>

      <Tabs value={value} onChange={handleChange} aria-label="Student Info Tabs">
        <Tab label="Personal Info" />
        <Tab label="Contact Info" />
        <Tab label="Academic Info" />
        <Tab label="Payment Info" />
        <Tab label="Other Info" />
      </Tabs>

      <Box flexGrow={1} width="100%"> {/* Ensures the content grows to fill available space */}
        {value === 0 && <PersonalInfo />}
        {value === 1 && <ContactInfo />}
        {value === 2 && <AcademicInfo />}
        {value === 3 && <PaymentInfo />}
        {value === 4 && <OtherInfo />}
      </Box>
    </Box>
  );
}

export default StudentBio;

