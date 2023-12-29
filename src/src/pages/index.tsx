import { useState } from 'react';
import axios from 'axios';
import { styled } from '@mui/material/styles';
import { Box, Button, Input, List, ListItem, Typography } from '@mui/material';

const Container = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
  backgroundColor: '#f5f5f5',
});

const Title = styled('h1')({
  fontSize: '3rem',
  fontWeight: 'bold',
  color: '#333',
  marginBottom: '2rem',
});

const Subtitle = styled('h2')({
  fontSize: '2rem',
  fontWeight: 'normal',
  color: '#666',
  marginBottom: '4rem',
});

const StyledInput = styled(Input)({
  marginRight: '1rem',
});

const StyledButton = styled(Button)({
  marginTop: '1rem',
});

const StyledListItem = styled(ListItem)({
  marginBottom: '1rem',
});

export default function Home() {
  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await axios.post('/api/bard', { question: inputValue });
    const answer = response.data.answer;

    setMessages((messages) => [...messages, { question: inputValue, answer }]);
    setInputValue('');
  };

  return (
    <Container>
      <Title>Welcome to my app</Title>
      <Subtitle>Let's get started!</Subtitle>
      <form onSubmit={handleSubmit}>
        <StyledInput
          type="text"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
        />
        <StyledButton type="submit">Ask</StyledButton>
      </form>
      <Box>
        <List>
          {messages.map((message, index) => (
            <StyledListItem key={index}>
              <Typography variant="body1">
                <strong>Q:</strong> {message.question}
              </Typography>
              <Typography variant="body1">
                <strong>A:</strong> {message.answer}
              </Typography>
            </StyledListItem>
          ))}
        </List>
      </Box>
    </Container>
  );
}
